// path: ./config/env/production/database.js

const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);


module.exports = ({ env }) => ({
  connection: {  
    client: 'postgres',
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
      debug: false,
  },
});


// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST'),
//       port: env.int('DATABASE_PORT'),
//       database: env('DATABASE_NAME'),
//       user: env('DATABASE_USERNAME'),
//       password: env('DATABASE_PASSWORD'),
//       ssl: {
//         rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
//       },
//     },
//     debug: false,
//   },
// });

