"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeBoard = writeBoard;
exports.rewriteTableAndPices = rewriteTableAndPices;
exports.writePicesToBoard = writePicesToBoard;
exports.gameBoardChangePice = gameBoardChangePice;
exports.gameBoardReturnTable = gameBoardReturnTable;
exports.gameBoardReturnPice = gameBoardReturnPice;
exports.gameBoardReturnPiceByYX = gameBoardReturnPiceByYX;

var BoardImport = _interopRequireWildcard(require("../../GameFunction/GameBoard/Board.js"));

var Logic = _interopRequireWildcard(require("../../GameFunction/GameLogic/Logic.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var cv = document.createElement("canvas");
/** CANVAS module **/

var c = cv.getContext("2d"); // featch 
// const Client = Client;

var shiftX = 50;
var shiftY = 50;
var piceMargin = 3;
var piceSize = 50; // let canvasPicesTab = {
//     k: '../../../Assets/PiecesAssets/Group1/king.png',
//     q: '../../../Assets/PiecesAssets/Group1/queen.png',
//     b: '../../../Assets/PiecesAssets/Group1/bishop.png',
//     n: '../../../Assets/PiecesAssets/Group1/knight.png',
//     p: '../../../Assets/PiecesAssets/Group1/pawn.png',
//     r: '../../../Assets/PiecesAssets/Group1/rook.png'
// }

var w, h;
var t = {
  ups: 20,
  lastTrack: -1
};
var whiteColor = 'rgb(80,80,80)';
var blackColor = 'rgb(20,20,20)';
var counter = {
  fps: 0,
  tps: 0
};
var value = 0;
var circles = [];
var gameBoard = BoardImport.gameBoard;
var pice = {};
var avaliableMoves = [];

function init() {
  console.log('init');
  scale();
  tick();
  render();
  cv.setAttribute("style", "position: absolute;top:0;left:0");
  document.body.appendChild(cv);
  logicInit(); // cv.addEventListener("mousedown", (ev) => {
  //     console.log(ev.clientX, ev.clientY);
  // });
  // let img = new Image();
  // img.src = "../../../Assets/PiecesAssets/Group1/king.png";
  // img.title = "king";
  // img.height = 50;
  // img.onload = () =>{
  //     // c.drawImage(img, 0,0);
  //     c.drawImage(img,0 ,0);
  // }

  cv.addEventListener("load", function () {
    console.log("canvas on load");
    writeBoard();
  });
}

function render() {
  // console.log("render");  
  window.addEventListener("resize", function () {
    console.log("resize");
    writeBoard();
    writePicesToBoard();
  });
  window.requestAnimationFrame(render);
}
/*
Kod wykonywalny tworzenie rysowanie tablicy

przesunięcie ->  shift

*/

/* END */
// var m = new Image();
// let img = new Image();
// img.src = '../../../Assets/PiecesAssets/Group1/king.png';
// img.onload = () =>{
//     c.drawImage(img, 0,0)
// }


function tick() {
  counter.tps++;
  setTimeout(function () {
    counter.tpd--;
  });
}

function scale() {
  // cv.width = w = window.innerWidth;
  // cv.height = h = window.innerHeight;
  cv.width = w = 700;
  cv.height = h = 700;
}

function writeBoard() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      var x = i * (50 + 3) + 3 + shiftX;
      var y = j * (50 + 3) + 3 + shiftY;
      c.fillStyle = (i + j) % 2 == 0 ? whiteColor : blackColor;
      c.fillRect(x, y, piceSize, piceSize);
    }
  }

  c.strokeStyle = 'red';
  c.lineWidth = 3;
  c.strokeRect(shiftX, shiftY, indexToPx(7), indexToPx(7));
}

function writePoints(pice, size, x, y, piceSize, piceMargin) {
  console.log(pice);
  console.log(size);
  console.log(piceSize);
  console.log(piceMargin);

  if (pice != null) {
    c.beginPath();
    c.arc(x, y, 13, 2 * Math.PI, false);
    return true;
  }

  return false;
}

function clearCanvas(startX, startY, endX, endY) {
  c.clearRect(startX, startY, endX, endY);
}

function rewriteTableAndPices(table) {
  clearCanvas(50, 50, 7 * (50 + 3) + 3 + shiftX, 7 * (50 + 3) + 3 + shiftY);
  writeBoard();
  BoardImport.gameBoard.forEach(function (value1, y, array) {
    value1.forEach(function (value, x, array) {
      if (value.img != null) {
        var img = new Image();
        img.src = value.img;

        var _h = indexToPx(y);

        var _w = indexToPx(x);

        img.onload = function () {
          c.drawImage(img, _w, _h, piceSize, piceSize);
        };
      }
    });
  });
}

function writePicesToBoard() {
  BoardImport.gameBoard.forEach(function (value1, y, array) {
    value1.forEach(function (value, x, array) {
      if (value.img != null) {
        var img = new Image();
        img.src = value.img;

        var _h2 = indexToPx(y);

        var _w2 = indexToPx(x);

        img.onload = function () {
          c.drawImage(img, _w2, _h2, piceSize, piceSize);
        };
      }
    });
  });
}

function pxToIndex(num) {
  return parseInt((num - (shiftX - piceMargin)) / (piceSize + piceMargin));
}

function indexToPx(num) {
  return num * (piceSize + piceMargin) + shiftX + piceMargin;
} // function writePice(pice) {
//     cv.beginPath();
//     cv.arc()
// }

/*
    START logic 
*/


function logicInit() {
  console.log("Start Logic Init");
  var firstMousedown = true;
  var piceHandler = {};
  cv.addEventListener('mousedown', function (ev) {
    // console.log("cv mousedown ");
    if (firstMousedown) {
      if (shiftX + piceMargin < ev.clientX && ev.clientX < shiftX + (piceMargin + piceSize) * 8 && shiftY + piceMargin < ev.clientY && ev.clientY < shiftY + (piceMargin + piceSize) * 8) {
        var piceY = pxToIndex(ev.clientY);
        var piceX = pxToIndex(ev.clientX); // pice.x = piceX;
        // pice.y = piceY;

        piceHandler = gameBoard[piceY][piceX];
        console.log("CheckAvaliableMoves: ");
        Logic.checkMoves(gameBoard, piceHandler);
        firstMousedown = false;
      }
    } else {
      // console.log('mouse else');
      if (shiftX + piceMargin < ev.clientX && ev.clientX < shiftX + (piceMargin + piceSize) * 8 && shiftY + piceMargin < ev.clientY && ev.clientY < shiftY + (piceMargin + piceSize) * 8) {
        var moveToY = pxToIndex(ev.clientY);
        var moveToX = pxToIndex(ev.clientX);
        console.log("doMove: ");
        console.log(moveToY + " " + piceHandler.y + " " + moveToX + " " + piceHandler.x);
        console.log(moveToY != undefined && moveToY != undefined);

        if (moveToY != piceHandler.y || moveToX != piceHandler.x && moveToY != undefined && moveToY != undefined) {
          console.log("ooo");
          console.log(moveToY + " " + piceHandler.y);
          console.log(moveToX + " " + piceHandler.x);
          console.log("ooo");
          Logic.doMoves(piceHandler, moveToY, moveToX);
        }

        firstMousedown = true;
      }

      piceHandler = {};
    }
  });
}

function gameBoardChangePice(pice, newY, newX) {
  console.log(gameBoard);

  if (!(0 <= newY <= 7 && 0 <= newX <= 7)) {
    return false;
  }

  console.log(gameBoard);
  var handler = gameBoard[pice.y][pice.x];
  gameBoard[pice.y][pice.x] = {};
  pice.y = newY;
  pice.x = newX;
  gameBoard[newY][newX] = handler;
  return true;
} // export function gameBoardChangePice(pice, newY, newX) {
//     game
//     return true;
// }


function gameBoardReturnTable() {
  return gameBoard;
}

function gameBoardReturnPice(pice) {
  return gameBoard[pice.y][pice.x];
}

function gameBoardReturnPiceByYX(y, x) {
  return gameBoard[y][x];
}
/*
    END logic 
*/

/* 
    RUN functions 
*/


window.onresize = scale; // Logic.logic();

init();
c.fillStyle = "black";
c.fillRect(0, 0, w, h);
writeBoard();
writePicesToBoard(); // Logic.pawnCheckMoves(gameBoard,pice);
// logicInit();

/*
    END functions
*/