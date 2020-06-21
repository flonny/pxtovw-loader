
var loaderUtils = require('loader-utils')
var pxtovw = require('pxtovw');
module.exports = function (source) {
  var options = loaderUtils.getOptions(this)
  var px2vw = new pxtovw(options)
  return px2vw.converPxToVw(source)
}