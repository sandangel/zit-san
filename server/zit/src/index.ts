import bodyParser from 'body-parser';
import express from 'express';
import { send_mail } from './send_mail';

const app = express();

app.use(
  // true: Use complex algorithm for deep parsing that can deal with nested objects.
  // https://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do#39872729
  bodyParser.urlencoded({
    extended: false,
  }),
);

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

app.get('client-info', (req, res) => {
  console.log(req.query);
  res.json({ ok: true });
});

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});
