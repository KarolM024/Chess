"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Knight = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Knight = function Knight() {
  _classCallCheck(this, Knight);

  this.name = "kinght";
  this.x = -1;
  this.y = -1;
  this.moveDirections = [[-2, 1], [-2, -1], [-1, 2], [-1, -2], [-1, 2], [1, 2], [-1, -2], [1, -2], [1, 2], [1, -2], [2, 1], [2, -1]];
};

exports.Knight = Knight;