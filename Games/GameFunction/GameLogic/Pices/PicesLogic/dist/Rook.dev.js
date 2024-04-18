"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rook = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rook = function Rook() {
  _classCallCheck(this, Rook);

  this.name = "k";
  this.x = -1;
  this.y = -1;
  this.moveDirections = [[8, 0], [-8, 0], [0, -8], [0, 8]];
};

exports.Rook = Rook;