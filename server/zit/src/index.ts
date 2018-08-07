import path from 'path';
// Load .env.local file in server/zit/.env.local
// Remember to run the server when you are in server/zit folder.
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

import bodyParser from 'body-parser';
import express from 'express';
import { sendMail } from './send_mail';
import { ChargeInfo } from './charge_model';
import jwt from 'jsonwebtoken';
import Stripe from 'stripe';
import cors from 'cors';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const app = express();

app.use(
  // true: Use complex algorithm for deep parsing that can deal with nested objects.
  // https://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do#39872729
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(cors());

app.use(bodyParser.json());
app.post('/invoice', async (req, res) => {
  try {
    await sendMail(req.body);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.json({ ok: false });
  }
});

app.get('/client-info', (req, res) => {
  const info = jwt.verify(req.query.token, process.env.SERVER_APP_SECRET as string);
  res.json(info);
});

app.post('/charge', async (req, res) => {
  try {
    const { user, currency, amount, stripeToken } = req.body as ChargeInfo;
    const charge = await stripe.charges.create({
      amount,
      currency,
      source: 'tok_visa',
      description: 'Zehitomo Sales',
    });

    if (charge.paid) {
      console.log('Sending to zehitomo.com: ', {
        event: 'paid',
        id: charge.id,
        createdAt: charge.created,
      });
      console.log(`Successfully created charge for user: ${user.name}`);
      res.json({ ok: true });
    } else {
      res.json({ ok: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ ok: false });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});
