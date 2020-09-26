const sendgrid = require("@sendgrid/mail");

export default async function (req, res) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, message } = req.body;

  const content = {
    to: "folasadeagbaje@gmail.com",
    from: "houseofgracerccgcc@gmail.com",
    subject: `New Message From - ${email}`,
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  try {
    await sendgrid.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
