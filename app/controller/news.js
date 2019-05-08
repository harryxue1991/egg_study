'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const {ctx} = this;
    ctx.body = '新闻首页'
  }

  async content() {
      const newsList = await this.service.news.getNewsList();
      this.ctx.body = newsList
  }
}

module.exports = NewsController;
