
module.exports = [
  'strapi::errors',
  {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': [
              "'self'",
              'data:',
              'blob:',
              'dl.airtable.com',
              '*.nyc3.digitaloceanspaces.com',
              'nyc3.digitaloceanspaces.com',
            ],
            'media-src': [
              "'self'",
              'data:',
              'blob:',
              'dl.airtable.com',
              '*.nyc3.digitaloceanspaces.com',
              'nyc3.digitaloceanspaces.com',
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];


// ~/strapi-aws-s3/backend/config/middlewares.js
    
// module.exports = [
//   'strapi::errors',
//   {
//     name: 'strapi::security',
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           'connect-src': ["'self'", 'https:'],
//           'img-src': [
//             "'self'",
//             'data:',
//             'blob:',
//             'dl.airtable.com',
//             'strapi-aws-s3-images-bucket-2.s3.us-east-2.amazonaws.com',
//           ],
//           'media-src': [
//             "'self'",
//             'data:',
//             'blob:',
//             'dl.airtable.com',
//             'strapi-aws-s3-images-bucket-2.s3.us-east-2.amazonaws.com', 
//           ],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];
