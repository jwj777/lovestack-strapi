module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", ""),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "lxY+RzJQH1iXS/sI3ua0Tw=="),
  },
  serveAdminPanel: env.bool("SERVE_ADMIN", true),
});
