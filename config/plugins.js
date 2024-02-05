
module.exports = ({ env }) => ({

 // AWS Image Storage on DO
  // upload: {
  //   config: {
  //     provider: 'aws-s3',
  //     providerOptions: {
  //       accessKeyId: env('DO_ACCESS_KEY_ID'),
  //       secretAccessKey: env('DO_ACCESS_SECRET'),
  //       endpoint: env('DO_ENDPOINT'),
  //       params: {
  //         Bucket: env('DO_BUCKET'), 
  //       },
  //     },
  //   },
  // },


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



// Email

email: {
  config: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'wjorgensen@demandstack.io',
      defaultReplyTo: 'wjorgensen@demandstack.io',
    },
  },
},



});


