'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);



  router.get('/news', controller.news.index);
  router.get('/newsContent', controller.news.content);
  router.get('/newsLists/:id', controller.news.newsLists);

  router.get('/admin', controller.admin.index);
  router.get('/project', controller.project.index);
};


