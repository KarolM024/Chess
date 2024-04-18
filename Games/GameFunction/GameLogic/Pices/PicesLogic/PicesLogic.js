import { Bishop } from "./Bishop.js";
import { King } from "./King.js";
import { Queen } from "./Queen.js";
import { Knight } from "./Knight.js";
import { Rook } from "./Rook.js";
import { Pawn } from "./Pawn.js";

export class PiecesLogic{
    // id = "";
    // color = "";
    // name = "";
    // x = Number;
    // y = Number;
    // moveDirections = [];
    // specialMove = [];

    constructor() {}    
    
    createPice(color, name , x , y)
    {
        let img = '';
        if(name == "k"){
            PiecesLogic.moveDirections = new King().moveDirections;
            img = '../../../Assets/PiecesAssets/Group1/king.png';
        }
        if(name == "q"){
            let q = new Queen();
            PiecesLogic.moveDirections = new Queen().moveDirections;
            img = '../../../Assets/PiecesAssets/Group1/queen.png';

        }
        if(name == "b"){
            PiecesLogic.moveDirections = new Bishop().moveDirections;
            img = '../../../Assets/PiecesAssets/Group1/bishop.png';

        }
        if(name == "n"){
            PiecesLogic.moveDirections = new Knight().moveDirections;
            PiecesLogic.specialMove = new Knight().specialMove;
            img = '../../../Assets/PiecesAssets/Group1/knight.png';
        }
        if(name == "r"){
            PiecesLogic.moveDirections = new Rook().moveDirections;
            img = '../../../Assets/PiecesAssets/Group1/rook.png';
        }
        if(name == "p"){
            PiecesLogic.moveDirections = new Pawn().moveDirections;
            PiecesLogic.specialMove = new Pawn().specialMove;
            img = '../../../Assets/PiecesAssets/Group1/pawn.png';
        }
        
        // console.log('START Pices Logic return: ');
        // console.table(PiecesLogic.moveDirections);
        // console.table(PiecesLogic.specialMove);
        // console.log('END Pices Logic');
        return {
            color :color,
            name : name,
            img : img,
            x : x,
            y : y,
            moveDirections : PiecesLogic.moveDirections,
            specialMove : PiecesLogic.specialMove,

        }
    }
}