'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    var List = [
      {url: 'https://www.baidu.com', title: '百度'},
      {url: 'http://xuexinchao.top', title: '薛辛超'}
    ];
    return List;
  }
}

module.exports = NewsService;
