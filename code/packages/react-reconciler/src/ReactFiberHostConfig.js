"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invariant = _interopRequireDefault(require("shared/invariant"));

var _ReactFiberHostConfig = require("./forks/ReactFiberHostConfig.dom");

Object.keys(_ReactFiberHostConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReactFiberHostConfig[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }