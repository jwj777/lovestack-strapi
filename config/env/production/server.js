module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://lovestack.io/backend',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
