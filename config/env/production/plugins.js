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

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'strapi-provider-upload-aws-s3',
      providerOptions: {
        accessKeyId: 'DO00DHVJDTD2XXGL984Z',
        secretAccessKey: 'LYAJdCqm798OA0s7F75uNXTx+syLSbjTFr+x7129ows',
        region: 'nyc3',
        endpoint: 'nyc3.digitaloceanspaces.com',
        params: {
          Bucket: 'lovestack',
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
