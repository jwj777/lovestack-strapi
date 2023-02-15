
module.exports = ({ env }) => ({

  // EZ FORMS

  ezforms: {
    config: {
      captchaProvider: {
        name: 'none'
      },
      notificationProviders: []
    }
  },
  
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },

});


