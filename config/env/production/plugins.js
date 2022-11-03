import { secretAccessKey, accessKeyId } from '/resources.js';

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env(resources.accessKeyId),
        secretAccessKey: env(resources.secretAccessKey),
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