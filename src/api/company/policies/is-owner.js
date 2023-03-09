'use strict';

const company = require("../controllers/company");

/**
 * `is-owner` policy.
 */
module.exports = async (policyCtx, config, {strapi}) => {
  // get user id/record to update/delete.
 const {id : userId} = policyCtx.state.user;

 const {id : companyId} = policyCtx.request.params;

 strapi.log.info('In is-owner policy.');

 const [company] = await strapi.entityService
    .findMany('api::company.company', {
      filters: {
        id: companyId,
        owner: userId
      }
    })
  // we have an company owned by the authenticated user
  if (company) {
    return true;
  }

  // we don't have an company owned by the user.
   return false;

};