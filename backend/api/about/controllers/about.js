"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();

// const sendgrid = require('@sendgrid/mail');
// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
// import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY =
  "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";

const SendEmail = async (email) => {
  const response = await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
          subject: "Thanks for reaching out!",
        },
      ],
      from: {
        email: "no-reply@rccghouseofgracecc.com",
        name: "RCCG House Of Grace",
      },
      reply_to: {
        email: "rccghogcorpuschristi@gmail.com",
        name: "RCCG House of Grace",
      },
      content: [
        {
          type: "text/html",
          value: `<strong>Thanks for reaching out to RCCG House of Grace. We'll be in touch with you soon!</strong>
          `,
        },
      ],
    }),
  });
  console.log("send-grid response ", response);
};

module.exports = {
  async contactus(ctx) {
    console.log("Api was hitter is", ctx.request.body);
    const { name, email, message } = ctx.request.body;
    try {
      // Send Email to address notifying them that we received their result.
      await SendEmail(email);
      ctx.response.send({ status: "ok" });
    } catch (e) {
      console.log(e);
      ctx.response.send({ status: "fail" });
    }
  },
};
