'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/news', controller.news.index);
  router.get('/news/content', controller.news.content);
  router.get('/news/:id', controller.news.getParams);
  router.get('/news/emoji/search', controller.news.getEmoji);
};
