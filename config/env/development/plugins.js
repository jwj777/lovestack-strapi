// module.exports = ({ env }) => ({
//   // ...
//   upload: {
//     config: {
//       provider: 'strapi-provider-upload-aws-s3',
//       providerOptions: {
//         accessKeyId: 'DO00DHVJDTD2XXGL984Z',
//         secretAccessKey: 'LYAJdCqm798OA0s7F75uNXTx+syLSbjTFr+x7129ows',
//         region: 'nyc3',
//         endpoint: 'nyc3.digitaloceanspaces.com',
//         params: {
//           Bucket: 'lovestack',
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
          provider: 'aws-s3',
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