module.exports = [
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", `${env("https://lovestack.nyc3.digitaloceanspaces.com")}`],
          "media-src": ["'self'", "data:", "blob:", `${env("https://lovestack.nyc3.digitaloceanspaces.com")}`],
          upgradeInsecureRequests: null,
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
];
