'use strict';

/**
 * company router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::company.company', {
  config: {
    update: {
        "policies" : ["is-owner"]
    },
    delete: {
        "policies" : ["is-owner"]
    }
  }
});
