export class Rook{
    constructor() {
        this.name = "k";
        this.x = -1;
        this.y = -1;
        this.moveDirections = [
            [8,0],[-8,0],
            [0,-8],[0,8],
        ];
    }

}
