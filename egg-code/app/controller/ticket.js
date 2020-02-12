'use strict';

const Controller = require('egg').Controller;

class TicketController extends Controller {
  async add() {
    const { ctx, app } = this;
    await ctx.service.ticket.add(ctx.request.body);
    ctx.body = app.sendMsg(1, '添加成功');
  }
}

module.exports = TicketController;
