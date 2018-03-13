'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  router.get('/', controller.home.index);
  router.get('/wechat/varidate', controller.wechat.varidate);
  router.get('/token', controller.token.getoken)
};
