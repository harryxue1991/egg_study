'use strict';

const Controller = require('egg').Controller;

/*
MVC：
view                         视图 模板 页面的展示
Controller控制器              负责处理一些业务逻辑的处理
model 模型（service）         和数据打交道（查询数据库   请求数据）
*/
class HomeController extends Controller {
  async index() {
    // 异步
    var List = await this.service.news.getNewsList();

    this.ctx.body = 'hello world：' + List;
    // await this.ctx.render('index')  

  }
}

module.exports = HomeController;
