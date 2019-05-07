'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  /**
   * 获取新闻数据列表
   */
  async getNewsList() {
    // 主要获取新闻数据
    var List = [
      1,2,3,4,5,6
    ]
    // 服务调用服务
    var user = await this.service.user.getUser();
    console.log(user)

    return List;
  }

}

module.exports = NewsService;
