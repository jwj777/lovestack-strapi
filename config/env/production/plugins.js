module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'provider-upload-aws-s3',
      providerOptions: {
        accessKeyId: env('DO00DHVJDTD2XXGL984Z'),
        secretAccessKey: env('LYAJdCqm798OA0s7F75uNXTx+syLSbjTFr+x7129ows'),
        region: env('nyc3'),
        endpoint: env('nyc3.digitaloceanspaces.com'),
        params: {
          Bucket: env('lovestack'),
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