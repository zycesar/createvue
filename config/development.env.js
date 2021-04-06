'use strict'
const merge = require('webpack-merge')
module.exports = merge({
  NODE_ENV: '"development"',
  // BASE_API: '"/api"' //如果不需要代理，则替换为接口域名
})
