'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let time = new Date();
    let msg = this.ctx.helper.helperMsg()
    await this.ctx.render('index.ejs', {
      time,
      msg
    })
  }
}

module.exports = HomeController;
