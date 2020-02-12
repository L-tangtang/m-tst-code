'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, app } = this;
    const { password } = ctx.request.body;
    const res = await ctx.service.user.selectlist(ctx.request.body);
    if (res.length === 0) {
      ctx.body = app.sendMsg(0, '账号不存在啊');
      return;
    }
    if (res[0].password !== password) {
      ctx.body = app.sendMsg(0, '密码不对啊');
      return;
    }

    ctx.body = app.sendMsg(1, '登陆成功');
  }
}

module.exports = UserController;
