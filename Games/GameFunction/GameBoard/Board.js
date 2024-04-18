import { PiecesLogic } from "../GameLogic/Pices/PicesLogic/PicesLogic.js";

// export calss

export var gameBoard = new Array(8).fill().map(() => new Array(8).fill().map(() => ({})));
    console.log("Board constructor");
    function createChessBoard(){
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
            if((i + j) % 2 == 0) {
                gameBoard[i][j] = 
                {color : 'white'}
            }else gameBoard[i][j] = {color : 'white'}
            }
            console.table(gameBoard[i]);
        }
    }


    export function setPices() {
        let localTab = new Array();
        let patternPice = new PiecesLogic();

        let whiteKing = patternPice.createPice('white','k',3,7);
        let blackKing = patternPice.createPice('black','k',3,0);

        let whiteQueen = patternPice.createPice('white','q',4,7);
        let blackQueen = patternPice.createPice('black','q',4,0);
        
        let whiteBishop = patternPice.createPice('white','b',2,7);
        let whiteBishop1 = patternPice.createPice('white','b',5,7);
        let blackBishop = patternPice.createPice('black','b',2,0);
        let blackBishop1 = patternPice.createPice('black','b',5,0);
        
        let whiteKnight = patternPice.createPice('white','n',1,7);
        let whiteKnight1 = patternPice.createPice('white','n',6,7);
        let blackKnight = patternPice.createPice('black','n',1,0);
        let blackKnight1 = patternPice.createPice('black','n',6,0);
        
        let whiteRook = patternPice.createPice('white','r',0,7);
        let whiteRook1 = patternPice.createPice('white','r',7,7);
        let blackRook = patternPice.createPice('black','r',0,0);
        let blackRook1 = patternPice.createPice('black','r',7,0);
        
        let whitePawn = patternPice.createPice('white','p',0,6);
        let whitePawn1 = patternPice.createPice('white','p',1,6);
        let whitePawn2 = patternPice.createPice('white','p',2,6);
        let whitePawn3 = patternPice.createPice('white','p',3,6);
        let whitePawn4 = patternPice.createPice('white','p',4,6);
        let whitePawn5 = patternPice.createPice('white','p',5,6);
        let whitePawn6 = patternPice.createPice('white','p',6,6);
        let whitePawn7 = patternPice.createPice('white','p',7,6);
    

        let blackPawn = patternPice.createPice('black','p',0,1);
        let blackPawn1 = patternPice.createPice('black','p',1,1);
        let blackPawn2 = patternPice.createPice('black','p',2,1);
        let blackPawn3 = patternPice.createPice('black','p',3,1);
        let blackPawn4 = patternPice.createPice('black','p',4,1);
        let blackPawn5 = patternPice.createPice('black','p',5,1);
        let blackPawn6 = patternPice.createPice('black','p',6,1);
        let blackPawn7 = patternPice.createPice('black','p',7,1);



        localTab.push(whiteKing, blackKing, whiteQueen, blackQueen, whiteBishop, whiteBishop1, blackBishop, blackBishop1, whiteKnight, whiteKnight1, blackKnight, blackKnight1, whiteRook, whiteRook1, blackRook, blackRook1, whitePawn, whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, blackPawn, blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7);

        // console.table(localTab);

        localTab.forEach((value, index, array) => {
            gameBoard[value.y][value.x] = value;
        });

        console.log("Result Board.js: ");
        console.log(gameBoard);
        // console.table(gameBoard);
        // console.log(gameBoard[3]);


        // window.onload = () => {            
            // let gameBoardElement = document.getElementsByClassName('divChessBoard');

            // console.log(gameBoardElement);
            // gameBoard.forEach((value, index, array) => {
            //     value.forEach((value1, index1, array1) => {
            //         // console.log(value1);
            //         let Elemet = document.createElement('div');
            //         Elemet.id = `${value1.y}${value1.x}`;
            //         Elemet.className = value1.color;
            //         // console.log(Elemet);
            //         gameBoardElement[value1.y][value.x].appendChild(Elemet);
                    
                    // Array.from(gameBoardElement).forEach
                    // gameBoardElement.appendChild(Elemet);
                    
                    // (gameBoardElement => {
                    //     gameBoardElement.appendChild(Elemet);
                    // });
                    // })

            
            // console.log(gameBoardElements);


                    // console.log(value);
                    // document.write(`<div id="${value.y +" "+value.x }" class="${value.color}"></div>`);
                // });
        // }
        

        // this.picesLogicPices.set("blackKings", [blackKing]);

        // this.picesLogicPices.set("whiteQueens", [whiteQueen]);
        // this.picesLogicPices.set("blackQueens", [blackQueen]);

        // this.picesLogicPices.set("whiteBishops", [whiteBishop, whiteBishop1]);
        // this.picesLogicPices.seta("blackBishops", [blackBishop, blackBishop1]);

        // this.picesLogicPices.set("whiteKnight", [whiteKnight, whiteKnight1]);
        // this.picesLogicPices.set("blackKnight", [blackKnight, blackKnight1]);

        // this.picesLogicPices.set("whiteRooks", [whiteRook, whiteRook1]);
        // this.picesLogicPices.set("blackRook1", [blackRook, blackRook1]);

        // this.picesLogicPices.set("whitePawn", [whitePawn, whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7]);
        // this.picesLogicPices.set("blackPawn", [blackPawn, blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7]);
        
        // gameBoard = [
        //     [picesLogicPices.blackRook, picesLogicPices.blackKnight, picesLogicPices.blackBishop, picesLogicPices.blackQueen, picesLogicPices.blackKing, picesLogicPices.blackBishop1, ],
        //     [],
        //     [],
        //     [],
        //     [],
        //     [],
        //     [],
        //     [],
        // ]
        
        //     picesLogicPices.blackBishop = 9;
    }

    setPices();

    /* wywoływanie */

    // writeTable();
    // createChessBoard();
    // return document.getElementById("chessBoard").innerHTML = "<p>aaaa </p>";
// let b = new Board();
// b.writeTable();
// console.log(b);