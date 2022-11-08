// module.exports = ({ env }) => ({
//   // ...
//   upload: {
//     config: {
//       provider: 'strapi-provider-upload-aws-s3',
//       providerOptions: {
//         accessKeyId: env('AWS_ACCESS_KEY_ID'),
//         secretAccessKey: env('AWS_ACCESS_SECRET'),
//         params: {
//           Bucket: env('AWS_BUCKET'),
//         },
//       },
//       actionOptions: {
//         upload: {},
//         uploadStream: {},
//         delete: {},
//       },
//     },
//   },
//   // ...
// });

    // ~/strapi-aws-s3/backend/config/plugins.js
    
    module.exports = ({ env }) => ({
      upload: {
        config: {
          provider: 'provider-upload-aws-s3',
          providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
              Bucket: env('AWS_BUCKET'),
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
    });
