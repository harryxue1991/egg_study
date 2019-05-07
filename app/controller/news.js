'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // this.ctx.body = "新闻页面";
    var msg = "houtai";

    // 异步
    var List = await this.service.news.getNewsList();
    
    // 这tm是个异步， 所以要加await
    await this.ctx.render('news',{
      msg,
      List
    });
  }

  async content() {
    const { id } = this.ctx.query;

    console.log(id)
    
    this.ctx.body = "新闻详情"
  }

  async newsLists() {

    const {id} = this.ctx.params

    this.ctx.body = `动态路由${id}`
  }
}

module.exports = NewsController;
