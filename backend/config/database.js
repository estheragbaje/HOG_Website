module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: process.env.NODE_ENV == "development" ? "sqlite" : "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USERNAME", ""),
        password: env("DATABASE_PASSWORD", ""),
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      options: {
        ssl: false,
      },
    },
  },
});
