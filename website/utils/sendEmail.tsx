import fetch from 'node-fetch';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';
const SENDGRID_API_KEY =
  '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';

const sendEmail = async ({ name, email }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email,
            },
          ],
          subject: 'Demo success :)',
        },
      ],
      from: {
        email: 'noreply@demo.com',
        name: 'Test SendGrid',
      },
      content: [
        {
          type: 'text/html',
          value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`,
        },
      ],
    }),
  });
};

export { sendEmail };
