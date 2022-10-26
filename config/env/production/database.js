
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      socketPath: env.DB_HOST,
      database: env.DB_NAME,
      user: env.DB_USER,
      password: env.DB_PASS,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});

