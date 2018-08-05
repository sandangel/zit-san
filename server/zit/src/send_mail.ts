import nodemailer, { SendMailOptions } from 'nodemailer';
import { InvoiceRequest } from './invoice_model';
import jwt from 'jsonwebtoken';

export async function send_mail(req: InvoiceRequest) {
  const account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });

  const secret = process.env.SERVER_APP_SECRET as string;
  const token = jwt.sign(req, secret, { expiresIn: '2d' });

  const mailOptions: SendMailOptions = {
    from: '"Zehitomo" <zehitomo@example.com',
    to: req.receiver.email,
    subject: 'Invoice',
    text: `Hello, this is the Zehitomo team. You have a message from ${req.sender.name}.`,
    html: `<a target="_blank" href="http://localhost:8080/?token=${token}">Invoice message.</a>`,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log(`Message sent: ${info.messageId}`);
  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
}
