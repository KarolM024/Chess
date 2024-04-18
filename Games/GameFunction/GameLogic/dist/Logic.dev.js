"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logic = logic;
exports.checkMoves = checkMoves;
exports.doMoves = doMoves;

var GameBoard = _interopRequireWildcard(require("../../GameModes/Mode1/canvas.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function logic() {
  console.log("loggggggggggggggggggggggg");
}
/*
    START Logic Pices
*/


function pawnCheckMoves(gameBoard, pice) {
  var posibleMoves = [];
  var moveWay = pice.color === 'white' ? -1 : 1;
  var startPosition = pice.color === 'white' ? 6 : 1;
  var opositColor = pice.color === 'white' ? 'black' : 'white'; // do przodu +1

  if (gameBoard[pice.y + moveWay][pice.x] != null && Object.keys(gameBoard[pice.y + moveWay][pice.x]) == 0) {
    posibleMoves.push([pice.y + moveWay, pice.x]);
  } // do przodu +2


  if (pice.y === startPosition && Object.keys(gameBoard[pice.y + 2 * moveWay][pice.x]) == 0) {
    posibleMoves.push([pice.y + 2 * moveWay, pice.x]);
  } // zabicia


  if (gameBoard[pice.y + moveWay][pice.x - 1] != null && gameBoard[pice.y + moveWay][pice.x - 1].color === opositColor) {
    console.log("a");
    posibleMoves.push([pice.y + moveWay, pice.x - 1]);
  }

  if (gameBoard[pice.y + moveWay][pice.x + 1] != null && gameBoard[pice.y + moveWay][pice.x + 1].color === opositColor) {
    console.log("b");
    posibleMoves.push([pice.y + moveWay, pice.x + 1]);
  }

  return posibleMoves;
}

function pawnMove(posibleMoves, pice, moveToY, moveToX) {
  if (isPosibleMovesIncludeMove(posibleMoves, moveToY, moveToX)) {
    console.log("pawnMove");
    GameBoard.gameBoardChangePice(pice, moveToY, moveToX);
    GameBoard.rewriteTableAndPices();
  } else {
    console.log("ERROR pawnMove");
  }
}

function rookCheckMove(gameBoard, pice) {
  var posibleMoves = [];
  var posibleKills = [];

  for (var y = pice.y + 1; y <= 7; y++) {
    if (!isMovePosible(gameBoard, posibleMoves, pice, y, pice.x)) {
      var val = isKillPosible(posibleKills, pice, y, pice.x);
      if (val != null) posibleKills.push(val);
      break;
    }
  }

  console.log(GameBoard.gameBoardReturnTable());

  for (var _y = pice.y - 1; _y >= 0; _y--) {
    if (!isMovePosible(gameBoard, posibleMoves, pice, _y, pice.x)) {
      var _val = isKillPosible(posibleKills, pice, _y, pice.x);

      if (_val != null) posibleKills.push(_val);
      break;
    }
  }

  console.log(GameBoard.gameBoardReturnTable());

  for (var x = pice.x + 1; x <= 7; x++) {
    if (!isMovePosible(gameBoard, posibleMoves, pice, pice.y, x)) {
      var _val2 = isKillPosible(posibleKills, pice, pice.y, x);

      if (_val2 != null) posibleKills.push(_val2);
      break;
    }
  }

  console.log(GameBoard.gameBoardReturnTable());

  for (var _x = pice.x - 1; _x >= 0; _x--) {
    if (!isMovePosible(gameBoard, posibleMoves, pice, pice.y, _x)) {
      isKillPosible(posibleMoves, pice, pice.y, _x);
      break;
    }
  }

  console.log(posibleMoves);
  console.log(posibleKills);
  return [posibleMoves, posibleKills];
}

function rookMove(posibleMoves, posibleKills, pice, moveToY, moveToX) {
  if (isPosibleMovesIncludeMove(posibleMoves, moveToY, moveToX) || isPosibleMovesIncludeMove(posibleKills, moveToY, moveToX)) {
    console.log("rookMove");
    GameBoard.gameBoardChangePice(pice, moveToY, moveToX);
    GameBoard.rewriteTableAndPices();
  } else {
    console.log("ERROR rookMove");
  }
}

function knightCheckMove() {}

function knightMove() {}

function bishopCheckMove() {}

function bishopMove() {}

function queenCheckMove() {}

function queenMove() {}

function kingCheckMove(gameBoard, pice) {
  var posibleMoves = [];
  var posibleKills = [];
  var kingPath = pice.color == "white" ? -1 : "black";

  if (pice.color == "white") {
    for (var y = pice.y - 1; y < pice.y + 2; y++) {
      console.log("y: " + y);

      for (var x = pice.x - 1; x < pice.x + 2; x++) {
        console.log("x: " + x);

        if (checkYX(y, x, 0, 0, 7, 7)) {
          console.log(y + " " + x);
          console.log(gameBoard[y][x]);

          if (gameBoard[y][x] == null) {
            posibleMoves.push([y, x]);
          } else {
            isKillPosible(posibleKills, pice, y, x);
          } // if ((gameBoard,pice)) {
          //     if(!isMovePosible(gameBoard, posibleMoves,pice, y, pice.x)){
          //         let val = isKillPosible(posibleKills,pice, y, x);
          //         if (val != null) posibleKills.push(val);
          //         break;
          //     }
          // }

        }
      }
    }
  }

  if (pice.color == "black") {
    for (var _y2 = pice.y - 1; _y2 < pice.y + 2; _y2++) {
      console.log("y: " + _y2);

      for (var _x2 = pice.x - 1; _x2 < pice.x + 2; _x2++) {
        if (checkYX(_y2, _x2, 0, 0, 7, 7)) {
          console.log("x: " + _x2);
          console.log(gameBoard[_y2][_x2]);

          if (gameBoard[_y2][_x2] == null) {
            posibleMoves.push([_y2, _x2]);
          } else {
            isKillPosible(posibleKills, pice, _y2, _x2);
          } // if ((gameBoard,pice)) {
          //     if(!isMovePosible(gameBoard, posibleMoves,pice, y, pice.x)){
          //         let val = isKillPosible(posibleKills,pice, y, x);
          //         if (val != null) posibleKills.push(val);
          //         break;
          //     }
          // }

        }
      }
    }
  }

  console.log("kingCheckMove");
  console.log(posibleMoves);
  console.log(posibleKills);
  console.log("kingCheckMove");
  return [posibleMoves, posibleKills];
}

function kingMove(posibleMoves, posibleKills, pice, moveToY, moveToX) {
  console.log(posibleMoves);

  if (isPosibleMovesIncludeMove(posibleMoves, moveToY, moveToX) || isPosibleMovesIncludeMove(posibleKills, moveToY, moveToX)) {
    console.log("rookMove");
    GameBoard.gameBoardChangePice(pice, moveToY, moveToX);
    GameBoard.rewriteTableAndPices();
  } else {
    console.log("ERROR rookMove");
  }
}

function checkMoves(gameBoard, pice) {
  switch (pice.name) {
    case 'p':
      pawnCheckMoves(gameBoard, pice);
      break;

    case 'r':
      rookCheckMove(gameBoard, pice);
      break;

    case 'n':
      knightCheckMove(gameBoard, pice);
      break;

    case 'b':
      bishopCheckMove(gameBoard, pice);
      break;

    case 'k':
      kingCheckMove(gameBoard, pice);
      break;

    case 'q':
      queenCheckMove(gameBoard, pice);
      break;
  }
}

function doMoves(pice, moveToY, moveToX) {
  var gameBoard = GameBoard.gameBoardReturnTable();
  console.log("DoMoves: ");
  console.log(GameBoard.gameBoardReturnTable());
  console.log(pice); // let posibleMoves = [];

  switch (pice.name) {
    case 'p':
      pawnMove(pawnCheckMoves(gameBoard, pice), pice, moveToY, moveToX);
      break;

    case 'r':
      var rookCheckMoveValues = rookCheckMove(gameBoard, pice);
      rookMove(rookCheckMoveValues[0], rookCheckMoveValues[1], pice, moveToY, moveToX);
      break;

    case 'k':
      var kingCheckMoveValues = kingCheckMove(gameBoard, pice);
      kingMove(kingCheckMoveValues[0], kingCheckMoveValues[1], pice, moveToY, moveToX);
      break;

    case 'b':
      bishopMove(gameBoard, pice, moveToY, moveToX);
      break;

    case 'n':
      kingMove(gameBoard, pice, moveToY, moveToX);
      break;

    case 'q':
      queenMove(gameBoard, pice, moveToY, moveToX);
      break;
  }
} // is Move posible


function isMovePosible(gameBoard, posibleMoves, pice, y, x) {
  console.log(GameBoard.gameBoardReturnTable());
  if (!(0 <= y <= 7 && 0 <= x <= 7 && (pice.y == y || pice.x == x))) console.log("ERROR wrong data");else {
    console.log(y + " " + x);

    if (posibleMoves.leght == 0 || posibleMoves == null) {
      console.log("posibleMoves.leght == 0 || posibleMoves == null");
    } else {
      if (gameBoard[y][x].color == null) {
        posibleMoves.push([y, x]);
        console.log(y + " " + x);
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}

function checkposibleKillOnField(gameBoard, pice, fieldY, fieldX) {
  if (GameBoard.gameBoardReturnPiceByYX(fieldY, fieldX).color != pice.color) return true;
  return false; // let opositColor =  (pice.color == "black")? "white" : "black";
  // let v = GameBoard.gameBoardReturnPiceByYX(fieldY,fieldX);
  // if(v.color == opositColor) return true;
  // else return false;
} // is kill posible


function isKillPosible(posibleKills, pice, y, x) {
  console.log(GameBoard.gameBoardReturnTable());
  var opositColor = pice.color == "black" ? "white" : "black";

  if (0 <= y <= 7 && y != undefined && 0 <= x <= 7 && x != undefined && (opositColor == 'white' || opositColor == 'black')) {
    console.log(GameBoard.gameBoardReturnTable());

    if (GameBoard.gameBoardReturnPiceByYX(y, x).color != pice.color) {
      console.log(y + " " + x);
      return [y, x];
    } else return null;
  } else {
    console.log("ERROR wrong data");
    console.log(pice);
    console.log(y + " " + x);
  }
}

function isPosibleMovesIncludeMove(posibleMoves, moveToY, moveToX) {
  var t = false;
  posibleMoves.forEach(function (value, index, array) {
    var table = value; // console.log(table[0] == moveToY);
    // console.log(table[1] == moveToX);

    if (table[0] == moveToY && table[1] == moveToX) {
      t = true;
    }
  });
  return t;
}

function checkYX(y, x, minY, minX, maxY, maxX) {
  if (y == null && x == null) return false;
  console.log(minY + " " + maxY);
  console.log(minY <= y <= maxY);
  console.log(minX <= x <= maxX);
  if (minY <= y <= maxY && minX <= x <= maxX) return true;
  return false;
}
/*
END Pice Move Logic
*/