'use strict';

/**
 * Portfolioprojects.js controller
 *
 * @description: A set of functions called "actions" for managing `Portfolioprojects`.
 */

module.exports = {

  /**
   * Retrieve portfolioprojects records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.portfolioprojects.search(ctx.query);
    } else {
      return strapi.services.portfolioprojects.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a portfolioprojects record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.portfolioprojects.fetch(ctx.params);
  },

  /**
   * Count portfolioprojects records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.portfolioprojects.count(ctx.query);
  },

  /**
   * Create a/an portfolioprojects record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.portfolioprojects.add(ctx.request.body);
  },

  /**
   * Update a/an portfolioprojects record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.portfolioprojects.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an portfolioprojects record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.portfolioprojects.remove(ctx.params);
  }
};
