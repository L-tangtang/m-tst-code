'use strict';

const Service = require('egg').Service;

class TicketService extends Service {
  async add({ anonymous, isRadio, title, description, name, qqnumber, dateTime }) {
    return await this.app.mysql.insert('ticket', {
      anonymous,
      isRadio,
      title,
      description,
      name,
      qqnumber,
      dateTime,
    });
  }
}

module.exports = TicketService;
