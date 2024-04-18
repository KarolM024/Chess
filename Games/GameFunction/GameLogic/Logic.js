import * as GameBoard from "../../GameModes/Mode1/canvas.js";
export function logic(){
console.log("loggggggggggggggggggggggg");
}
/*
    START Logic Pices
*/
function pawnCheckMoves(gameBoard,pice) {
    let posibleMoves = [];
    let moveWay = pice.color === 'white' ? -1 : 1;
    let startPosition = pice.color === 'white' ? 6 : 1;
    let opositColor = pice.color === 'white' ? 'black' : 'white'; 
    // do przodu +1
    if(gameBoard[pice.y+ moveWay][pice.x] != null && Object.keys(gameBoard[pice.y+ moveWay][pice.x]) == 0){
        posibleMoves.push([pice.y+moveWay,pice.x]);
    }
    // do przodu +2
    if(pice.y === startPosition && Object.keys(gameBoard[pice.y+ 2* (moveWay)][pice.x]) == 0){
        posibleMoves.push([pice.y+2* (moveWay),pice.x]);
    }
    // zabicia
    if(gameBoard[pice.y+ moveWay][pice.x-1] != null && gameBoard[pice.y+ moveWay][pice.x-1].color === opositColor){
        console.log("a");
        posibleMoves.push([pice.y+moveWay,pice.x-1]);
    }
    if(gameBoard[pice.y+ moveWay][pice.x+1] != null && gameBoard[pice.y+ moveWay][pice.x+1].color === opositColor){
        console.log("b");
        posibleMoves.push([pice.y+moveWay,pice.x+1]);
    }
    return posibleMoves;
}
function pawnMove(posibleMoves, pice, moveToY, moveToX) { 
    if(isPosibleMovesIncludeMove(posibleMoves,moveToY, moveToX)){   
        console.log("pawnMove");     
        GameBoard.gameBoardChangePice(pice, moveToY, moveToX);        
        GameBoard.rewriteTableAndPices();
    }else{
        console.log("ERROR pawnMove");
    }
}

function rookCheckMove(gameBoard, pice) { 
    let posibleMoves = [];
    let posibleKills = [];
    for (let y = pice.y+1; y <= 7; y++) {
        if(!isMovePosible(gameBoard, posibleMoves,pice, y, pice.x)){
            let val = isKillPosible(posibleKills,pice, y, pice.x);
            if (val != null) posibleKills.push(val);
            break;
        }
    }
    console.log(GameBoard.gameBoardReturnTable());  
    for (let y = pice.y-1; y >= 0; y--) {
        if(!isMovePosible(gameBoard, posibleMoves,pice, y, pice.x)){
            let val = isKillPosible(posibleKills,pice, y, pice.x);
            if (val != null) posibleKills.push(val);
            break;
        }
    }
    console.log(GameBoard.gameBoardReturnTable());
    for (let x = pice.x+1; x <= 7; x++) {
        if(!isMovePosible(gameBoard, posibleMoves,pice, pice.y, x)){
            let val = isKillPosible(posibleKills,pice, pice.y, x);
            if (val != null) posibleKills.push(val);
            break;
        } 
    }
    console.log(GameBoard.gameBoardReturnTable());
    for (let x = pice.x-1; x >= 0; x--) {
        if(!isMovePosible(gameBoard, posibleMoves,pice, pice.y, x)){ 
            isKillPosible(posibleMoves,pice, pice.y, x);
            break;
        }
    }
    console.log(posibleMoves);
    console.log(posibleKills);
    return [posibleMoves, posibleKills];
}

function rookMove(posibleMoves, posibleKills,pice, moveToY, moveToX) {  
    if(isPosibleMovesIncludeMove(posibleMoves,moveToY, moveToX) || isPosibleMovesIncludeMove(posibleKills,moveToY, moveToX)){        
        console.log("rookMove"); 
        GameBoard.gameBoardChangePice(pice, moveToY, moveToX);        
        GameBoard.rewriteTableAndPices();
    }else{
        console.log("ERROR rookMove");
    }
}


function knightCheckMove() {  }
function knightMove() {  }

function bishopCheckMove() {  }
function bishopMove() {  }

function queenCheckMove() {  }
function queenMove() {  }

function kingCheckMove(gameBoard,pice) {
    let posibleMoves = [];
    let posibleKills = [];
    let kingPath = pice.color == "white" ? -1 : "black"; 
    if(pice.color == "white"){
        for (let y = pice.y-1; y < pice.y+2; y++) {
            console.log("y: "+y);
            for (let x = pice.x-1; x < pice.x+2; x++){
                console.log("x: "+x);
                if(checkYX(y,x,0,0,7,7)){
                    console.log(y+" "+x);
                    console.log(gameBoard[y][x]);
                    if(gameBoard[y][x] == null){
                        posibleMoves.push([y,x]);
                    }else{
                        isKillPosible(posibleKills,pice,y,x);
                    }
                    // if ((gameBoard,pice)) {
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
    if(pice.color == "black"){
        for (let y = pice.y-1; y < pice.y+2; y++) {
            console.log("y: "+y);
            for (let x = pice.x-1; x < pice.x+2; x++){
                if(checkYX(y,x,0,0,7,7)){
                    console.log("x: "+x);
                    console.log(gameBoard[y][x]);
                    if(gameBoard[y][x] == null){
                        posibleMoves.push([y,x]);
                    }else{
                        isKillPosible(posibleKills,pice,y,x);
                    }
                    // if ((gameBoard,pice)) {
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
    return [posibleMoves,posibleKills];
}
function kingMove(posibleMoves, posibleKills,pice , moveToY, moveToX) {
    console.log(posibleMoves);
    if(isPosibleMovesIncludeMove(posibleMoves,moveToY, moveToX) || isPosibleMovesIncludeMove(posibleKills,moveToY, moveToX)){        
        console.log("rookMove"); 
        GameBoard.gameBoardChangePice(pice, moveToY, moveToX);        
        GameBoard.rewriteTableAndPices();
    }else{
        console.log("ERROR rookMove");
    }

}


    export function checkMoves(gameBoard,pice){
    switch (pice.name){
        case 'p' :
            pawnCheckMoves(gameBoard, pice);    
            break;
        case 'r' :
            rookCheckMove(gameBoard,pice);            
            break;
        case 'n' :
            knightCheckMove(gameBoard,pice);            
            break;
        case 'b' :
            bishopCheckMove(gameBoard,pice);            
            break;
        case 'k' :
            kingCheckMove(gameBoard,pice);            
            break;
        case 'q' :
            queenCheckMove(gameBoard,pice);            
            break;
    }
}
export function doMoves(pice, moveToY, moveToX) {
    let gameBoard = GameBoard.gameBoardReturnTable();
    console.log("DoMoves: ");
    console.log(GameBoard.gameBoardReturnTable());
    console.log(pice);
    // let posibleMoves = [];
    switch (pice.name){
        case 'p' :
            pawnMove(pawnCheckMoves(gameBoard,pice),pice , moveToY, moveToX);    
            break;
        case 'r' :
            let rookCheckMoveValues = rookCheckMove(gameBoard,pice);
            rookMove(rookCheckMoveValues[0], rookCheckMoveValues[1] ,pice , moveToY, moveToX);            
            break;
        case 'k' :
            let kingCheckMoveValues = kingCheckMove(gameBoard,pice);
            kingMove(kingCheckMoveValues[0],kingCheckMoveValues[1],pice , moveToY, moveToX);            
            break;
        case 'b' :
            bishopMove(gameBoard,pice , moveToY, moveToX);            
            break;
        case 'n' :
            kingMove(gameBoard,pice , moveToY, moveToX);            
            break;
        case 'q' :
            queenMove(gameBoard,pice , moveToY, moveToX);            
            break;
    }
}

// is Move posible
function isMovePosible(gameBoard,posibleMoves,pice,y,x) {
    console.log(GameBoard.gameBoardReturnTable());
    if (!(0 <= y <= 7 && 0 <= x <= 7 && (pice.y == y || pice.x == x)))console.log("ERROR wrong data");
    else{
        console.log(y+" "+ x );
        if (posibleMoves.leght == 0 || posibleMoves == null){
            console.log("posibleMoves.leght == 0 || posibleMoves == null");
        }else{
            if(gameBoard[y][x].color == null){
                posibleMoves.push([y,x]);
                console.log(y+" "+x);
                return true;
            }else{
                return false;
            } 
        }
    } 
    return false;
} 
function checkposibleKillOnField(gameBoard, pice, fieldY,  fieldX) {
    if(GameBoard.gameBoardReturnPiceByYX(fieldY,fieldX).color != pice.color)return true;
    return false;
    // let opositColor =  (pice.color == "black")? "white" : "black";
    // let v = GameBoard.gameBoardReturnPiceByYX(fieldY,fieldX);
    // if(v.color == opositColor) return true;
    // else return false;
    
}
// is kill posible
function isKillPosible(posibleKills,pice,y,x) { 
    console.log(GameBoard.gameBoardReturnTable());
    
    let opositColor =  (pice.color == "black")? "white" : "black";
    if (0 <= y <= 7 && y != undefined && 0 <= x <= 7 && x != undefined &&(opositColor == 'white' || opositColor == 'black')){
        console.log(GameBoard.gameBoardReturnTable());
        if(GameBoard.gameBoardReturnPiceByYX(y,x).color != pice.color){
            console.log(y +" "+x);
        return [y,x];
        }else return null;
    }else {
        console.log("ERROR wrong data");
        console.log(pice);
        console.log(y +" "+ x);
    }
}
function isPosibleMovesIncludeMove(posibleMoves, moveToY, moveToX){
    let t = false;
    posibleMoves.forEach((value, index, array) => {
        let table = value;
        // console.log(table[0] == moveToY);
        // console.log(table[1] == moveToX);
        if(table[0] == moveToY && table[1] == moveToX){
            t = true;
        }
    })
    return t;
}
function checkYX(y,x, minY,minX,maxY,maxX){
    if(y == null && x == null) return false;
    console.log(minY +" "+maxY);
    console.log(minY <= y <= maxY); 
    console.log(minX <= x <= maxX);
    if(minY <= y <= maxY  && minX <= x <= maxX) return true;
    return false;
}
/*
END Pice Move Logic
*/








