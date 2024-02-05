
module.exports = ({ env }) => ({

  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },

  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID", ""),
          secretAccessKey: env("AWS_ACCESS_SECRET", ""),
          region: env("AWS_S3_REGION", "us-east-2"),
          params: {
            Bucket: env("AWS_S3_BUCKET"),
            ACL: env("AWS_S3_ACL", "private"),
          },
          baseUrl: env("AWS_S3_URL"), 
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  // Import Export 
  'import-export-entries': {
    enabled: true,
    config: {
      /**
       * Public hostname of the server.
       *
       * If you use the local provider to persist medias,
       * `serverPublicHostname` should be set to properly export media urls.
       */
      serverPublicHostname: 'https://localhost:1337', // default: "".
    },
  },

});
