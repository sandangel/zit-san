import { send_mail } from './send_mail';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(
  // Use complex algorithm for deep parsing that can deal with nested objects.
  // https://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do#39872729
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());
app.post('/invoice', (req, res) => {
  console.log(req.body);
  send_mail();
});
