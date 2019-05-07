'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUser() {
    const user = {
        name: '薛辛超',
        age: 18
    }
    return user
  }
}

module.exports = UserService;
