'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // const {ctx} = this;
    // ctx.body = '新闻首页'
    const List = await this.service.news.getNewsList();
    // ctx.body = 'hello world';
    await this.ctx.render('news/news.njk', {
      List
    })
  }

  async content() {
    const newsList = await this.service.news.getNewsList();
    this.ctx.body = newsList
  }

  async getParams() {
    const {id} = this.ctx.params;
    this.ctx.body = id
  }
}

module.exports = NewsController;
