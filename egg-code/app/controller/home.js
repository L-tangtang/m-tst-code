'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx, app } = this;
    const list = await ctx.service.user.list();
    ctx.body = app.sendMsg(1, '', list);
  }
}

module.exports = HomeController;
