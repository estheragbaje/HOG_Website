require("dotenv").config();

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
};
