import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

// const sendgrid = require('@sendgrid/mail');
// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const { name, email, message } = req.body;

  let mailer = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const content = {
    to: 'gcwwkrypebdjqzadpb@niwghx.com',
    from: 'no-reply@houseofgracerccg.com',
    subject: `New Message From - ${email}`,
    text: 'We will be in touch',
    html: '<strong>Thanks for your message</strong>',
  };

  try {
    await mailer.sendMail(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
