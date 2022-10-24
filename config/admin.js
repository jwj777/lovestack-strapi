module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", ""),
  },
  serveAdminPanel: env.bool("SERVE_ADMIN", true),
  url: env("PUBLIC_ADMIN_URL", "/admin"),
});
