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

  async getEmoji() {
    // var url = this.config.api + ''
    const {keyword} = this.ctx.query;
    const res = await this.ctx.curl(`https://www.doutula.com/api/search?keyword=${keyword}&mime=0&page=1`)
    //console.log(res.data)     //返回的是Buffer

    var data = JSON.parse(res.data) //吧Buhher转成对象
    return data.data.list;
  }
}

module.exports = NewsService;
