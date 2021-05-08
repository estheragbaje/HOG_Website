"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async contactus(ctx) {
    console.log("APi was hit", ctx.request.body);
    ctx.response.send("Here");
  },
};
