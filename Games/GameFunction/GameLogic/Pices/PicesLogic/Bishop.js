export class Bishop{
    constructor() {
        this.name = "k";
        this.x = -1;
        this.y = -1;
        this.moveDirections = [
            ['-~~','-~~'],['-~~','~~'],
            ['~~','~~'],['~~','-~~']
        ];
    }

}
