import nodemailer from 'nodemailer';

nodemailer.createTestAccount((err, account) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: '"Zehitomo" <zehitomo@example.com',
    to: 'vinhsannguyen91@gmail.com',
    subject: 'Invoice',
    html: '<a href="localhost:8080">Invoice message.</a>',
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err != null) {
      console.log(err);
    }

    console.log(`Message sent: ${info}`);
  });
});
