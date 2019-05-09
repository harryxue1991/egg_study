/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1557282056965_2632';

  // add your middleware config here
  config.middleware = [
    'printdate',
    'forbidip'
  ];
  // 给printdate中间件传入参数
  config.printdate = {
    name: '薛辛超'
  }
  config.forbidip = {
    ip: [
      '192.168.1.113'
    ],
  };

  // add your user config here
  const userConfig = {
    myAppName: 'egg',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks',
      '.ejs': 'ejs',
    },
    
  }

  return {
    ...config,
    ...userConfig,
  };
};