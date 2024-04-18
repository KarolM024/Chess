"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.King = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var King = function King() {
  _classCallCheck(this, King);

  // this.name = "k";
  // this.color = "null";
  // this.x = -1;
  // this.y = -1;
  // this.moveDirections = [
  //     ['-1','-1'],['-1','0'],['-1','1'],
  //     ['1','0'],['1','1'],['1','-1'],
  //     ['0','1'],['0','-1']
  // ];
  return {
    name: "k",
    color: "null",
    x: -1,
    y: -1,
    moveDirections: [[-1, -1], [-1, 0], [-1, 1], [1, 0], [1, 1], [1, -1], [0, 1], [0, -1] // ['-1','-1'],['-1','0'],['-1','1'],
    // ['1','0'],['1','1'],['1','-1'],
    // ['0','1'],['0','-1']
    ]
  };
};

exports.King = King;