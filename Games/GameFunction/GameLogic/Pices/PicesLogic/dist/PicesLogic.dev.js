"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PiecesLogic = void 0;

var _Bishop = require("./Bishop.js");

var _King = require("./King.js");

var _Queen = require("./Queen.js");

var _Knight = require("./Knight.js");

var _Rook = require("./Rook.js");

var _Pawn = require("./Pawn.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PiecesLogic =
/*#__PURE__*/
function () {
  // id = "";
  // color = "";
  // name = "";
  // x = Number;
  // y = Number;
  // moveDirections = [];
  // specialMove = [];
  function PiecesLogic() {
    _classCallCheck(this, PiecesLogic);
  }

  _createClass(PiecesLogic, [{
    key: "createPice",
    value: function createPice(color, name, x, y) {
      var img = '';

      if (name == "k") {
        PiecesLogic.moveDirections = new _King.King().moveDirections;
        img = '../../../Assets/PiecesAssets/Group1/king.png';
      }

      if (name == "q") {
        var q = new _Queen.Queen();
        PiecesLogic.moveDirections = new _Queen.Queen().moveDirections;
        img = '../../../Assets/PiecesAssets/Group1/queen.png';
      }

      if (name == "b") {
        PiecesLogic.moveDirections = new _Bishop.Bishop().moveDirections;
        img = '../../../Assets/PiecesAssets/Group1/bishop.png';
      }

      if (name == "n") {
        PiecesLogic.moveDirections = new _Knight.Knight().moveDirections;
        PiecesLogic.specialMove = new _Knight.Knight().specialMove;
        img = '../../../Assets/PiecesAssets/Group1/knight.png';
      }

      if (name == "r") {
        PiecesLogic.moveDirections = new _Rook.Rook().moveDirections;
        img = '../../../Assets/PiecesAssets/Group1/rook.png';
      }

      if (name == "p") {
        PiecesLogic.moveDirections = new _Pawn.Pawn().moveDirections;
        PiecesLogic.specialMove = new _Pawn.Pawn().specialMove;
        img = '../../../Assets/PiecesAssets/Group1/pawn.png';
      } // console.log('START Pices Logic return: ');
      // console.table(PiecesLogic.moveDirections);
      // console.table(PiecesLogic.specialMove);
      // console.log('END Pices Logic');


      return {
        color: color,
        name: name,
        img: img,
        x: x,
        y: y,
        moveDirections: PiecesLogic.moveDirections,
        specialMove: PiecesLogic.specialMove
      };
    }
  }]);

  return PiecesLogic;
}();

exports.PiecesLogic = PiecesLogic;