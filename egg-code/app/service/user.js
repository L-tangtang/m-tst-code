'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async selectlist({ username }) {
    return await this.app.mysql.select('userlist', { where: { username } });
  }
  async list() {
    return await this.app.mysql.select('ticket');
  }
}

module.exports = UserService;
