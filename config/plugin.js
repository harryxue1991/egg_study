'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // },
  // nunjucks 插件
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  // ejs 插件
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  }
};