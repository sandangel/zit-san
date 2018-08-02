import bodyParser from 'body-parser';
import express from 'express';
import { send_mail } from './send_mail';
import jwt from 'jsonwebtoken';
const app = express();

app.use(
  // true: Use complex algorithm for deep parsing that can deal with nested objects.
  // https://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do#39872729
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.post('/invoice', async (req, res) => {
  try {
    await send_mail(req.body);
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

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});
