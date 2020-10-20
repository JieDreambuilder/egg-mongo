'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/users', controller.user.getUserList);
  router.get('/texts', controller.text.getTextList);
  router.get('/getStr', controller.text.getTextByPath)
  router.post('/postStr', controller.text.updateTextByPath)
};
