module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('DO_ACCESS_KEY_ID'),
        secretAccessKey: env('DO_ACCESS_SECRET'),
        endpoint: env('DO_ENDPOINT'),
        params: {
          Bucket: env('DO_BUCKET'),
        },
      },
    },
  },
  // ...
});


// //  S3 Version
//     // ~/strapi-aws-s3/backend/config/plugins.js
    
//     module.exports = ({ env }) => ({
//       upload: {
//         config: {
//           provider: 'aws-s3',
//           providerOptions: {
//             accessKeyId: env('AWS_ACCESS_KEY_ID'),
//             secretAccessKey: env('AWS_ACCESS_SECRET'),
//             region: env('AWS_REGION'),
//             params: {
//               Bucket: env('AWS_BUCKET'),
//             },
//           },
//           actionOptions: {
//             upload: {},
//             uploadStream: {},
//             delete: {},
//           },
//         },
//       },
//     });
