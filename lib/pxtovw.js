"use strict";
var css = require("css");

var config = {
  viewportWidth: 1080,
  unitPrecision: 5,
  unitToConvert: "px",
};
function pxtovw(options) {
  if (options === void 0) {
    this.config = config;
  } else if (Object.prototype.toString.call(options) !== "[object Object]") {
    throw new Error("options need a object");
  } else {
    this.config = config;
    for (var property in options) {
      config[config] = options[property];
    }
  }
}
pxtovw.prototype.converPxToVw = function (cssText) {
  this.ast = css.parse(cssText);
  return this.parseRules(this.ast.stylesheet.rules);
};
pxtovw.prototype.parseRules = function (rules) {
  console.log(rules)
  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    var declarations = rule.declarations;
    if (rule.type === "media" && rule.rules.length > 0) {
      this.parseRules(rule.rules);
      continue;
    } else if (rule.type === "keyframes") {
      this.parseRules(rule.keyframes);
      continue;
    } else if (rule.type !== "rule" && rule.type !== "keyframe") {
      continue;
    }
    if (!declarations) {
      continue;
    }
    for (var j = 0; j < declarations.length; j++) {
      if (!declarations[j]) {
        continue;
      }
      this.convertUnit(declarations[j]);
    }
  }
  return css.stringify(this.ast);
};
// console.log(JSON.stringify(ast.stylesheet.rules, null, ' '));
pxtovw.prototype.convertUnit = function (declaration) {
  var config = this.config;
  var converStr = "";
  var state = data;
  var unitToken;
  if (!declaration.value) {
    return;
  }
  for (var i = 0; i < declaration.value.length; i++) {
    // console.log("char--------", declaration.value[i], "\n");
    state = state(declaration.value[i]);
  }
  commitUnit();
  function data(c) {
    if (c.match(/[0-9]/)) {
      unitToken = {
        number: "",
        unit: "",
      };
      unitToken.number += c;
      return numerical;
    } else {
      converStr += c;
      return data;
    }
  }
  function numerical(c) {
    if (c.match(/[0-9]/)) {
      unitToken.number += c;
      return numerical;
    } else if (c.match(/^[\t\n\f ]$/)) {
      commitUnit();
      converStr += c;
      return data;
    } else {
      return unit(c);
    }
  }
  function unit(c) {
    if (c.match(/^[\t\n\f ,)\!]$/)) {
      commitUnit();
      converStr += c;
      return data;
    } else {
      unitToken.unit += c;
      return unit;
    }
  }
  function commitUnit() {
    if (unitToken && unitToken.unit === config.unitToConvert) {
      unitToken.unit = "vw";
      unitToken.number = (
        (unitToken.number / config.viewportWidth) *
        100
      ).toFixed(config.unitPrecision);
    }
    if (unitToken !== void 0) {
      converStr += unitToken.number;
      converStr += unitToken.unit;
    }
    unitToken = void 0;
  }
  declaration.value = converStr;
  converStr = "";
};
module.exports = pxtovw;
