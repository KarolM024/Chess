export class Queen{
    constructor() {
        this.name = "k";
        this.x = -1;
        this.y = -1;  
        this.moveDirections = [
            [-8,-8],[-8,0],[-8,8],
            [8,0],[8,8],[8,-8],
            [0,8],[0,-8]
        ];
        this.a;
    }

}
