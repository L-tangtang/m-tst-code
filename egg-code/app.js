'use strict';
const sendMsg = require('./app/utils/sendMsg');

module.exports = app => {
  app.sendMsg = sendMsg;
};
