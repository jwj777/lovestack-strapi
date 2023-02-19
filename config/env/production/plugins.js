
module.exports = ({ env }) => ({

  // AWS Image Storage on DO
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

  // EZ FORMS

  ezforms: {
    config: {
      captchaProvider: {
        name: 'none'
      },
      notificationProviders: []
    }
  },


});
