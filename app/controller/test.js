'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
    async index() {
        this.ctx.body = {title: 'hello world'}
    }
}

module.exports = TestController;
