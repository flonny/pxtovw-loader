// var pxtovw = require('./lib/pxtovw');
// var fs = require("fs-extra");
// var cssText = fs.readFileSync("./soure.css", { encoding: "utf8" });
// var px2vw = new pxtovw({})
// console.log(px2vw)
// console.log(px2vw.converPxToVw(cssText))
var loaderUtils = require('loader-utils')
var pxtovw = require('./lib/pxtovw');

module.exports = function (source) {
  var options = loaderUtils.getOptions(this)
  var px2vw = new pxtovw(options)
  return px2vw.converPxToVw(cssText)
}
// module.exports = require('./lib/pxtovw');