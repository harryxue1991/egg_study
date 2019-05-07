'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async index() {
    this.ctx.body="哈哈哈哈哈"
  }
}

module.exports = ProjectController;
