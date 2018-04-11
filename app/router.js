'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/wechat/varidate', controller.wechat.varidate); // token 验证
  router.get('/wechat/access_token', controller.wechat.getAccessToken); // 测试获取access_token
};
