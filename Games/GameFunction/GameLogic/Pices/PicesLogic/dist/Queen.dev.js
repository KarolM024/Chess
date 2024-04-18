"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Queen = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queen = function Queen() {
  _classCallCheck(this, Queen);

  this.name = "k";
  this.x = -1;
  this.y = -1;
  this.moveDirections = [[-8, -8], [-8, 0], [-8, 8], [8, 0], [8, 8], [8, -8], [0, 8], [0, -8]];
  this.a;
};

exports.Queen = Queen;