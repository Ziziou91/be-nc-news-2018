if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
var app = express();

function isStrictMode() {
  if (!this === true) return 'is in strict mode';
}
console.log(isStrictMode());

module.exports = app;
