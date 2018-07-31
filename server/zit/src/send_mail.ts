import nodemailer from 'nodemailer';

export function send_mail() {
  nodemailer.createTestAccount((err, account) => {
    if (err != null) {
      console.error(`Failed to create a testing account: ${err.message}`);
      process.exit(1);
    }
    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: '"Zehitomo" <zehitomo@example.com',
      to: 'thinhpham@example.com',
      subject: 'Invoice',
      text: 'Hello, this is the Zehitomo team. We have a message for you.',
      html: '<a href="localhost:8080">Invoice message.</a>',
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err != null) {
        console.log(err);
      }

      console.log(`Message sent: ${info.messageId}`);
      console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    });
  });
}
