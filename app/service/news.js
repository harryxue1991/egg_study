'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    var List = [1,2,3,4,5,6];
    return List;
  }
}

module.exports = NewsService;
