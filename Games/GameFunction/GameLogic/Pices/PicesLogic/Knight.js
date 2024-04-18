export class Knight{
    constructor() {
        this.name = "kinght";
        this.x = -1;
        this.y = -1;
        this.moveDirections = [
            [-2,1],[-2,-1],
            [-1,2],[-1,-2],
            [-1,2],[1,2],
            [-1,-2],[1,-2],
            [1,2],[1,-2],
            [2,1],[2,-1],
        ]
    }
}
