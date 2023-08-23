module.exports = [
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'", 
            "data:", 
            "blob:", 
            "dl.airtable.com",
            '*market-assets.strapi.io',
            '*.digitaloceanspaces.com',
            'strapi-aws-s3-images-bucket-2.s3.us-east-2.amazonaws.com'
          ],
          "media-src": [
            "'self'", 
            "data:", 
            "blob:", 
            "dl.airtable.com",
            '*market-assets.strapi.io',
            '*.digitaloceanspaces.com',
            'strapi-aws-s3-images-bucket-2.s3.us-east-2.amazonaws.com'
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
];


// module.exports = [
//   // ...
//   {
//     name: 'strapi::security',
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": ["'self'", "data:", "blob:", `${"https://lovestack.nyc3.digitaloceanspaces.com"}`],
//           "media-src": ["'self'", "data:", "blob:", `${"https://lovestack.nyc3.digitaloceanspaces.com"}`],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   // ...
// ];


module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

