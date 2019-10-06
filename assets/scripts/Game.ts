const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    yGround: number = 0;

    @property(cc.Node)
    ground: cc.Node = null;
    @property(cc.Node)
    player: cc.Node = null;
    @property(cc.Prefab)
    starPrefab: cc.Prefab = null;

    @property({displayName: "Score", tooltip: "Current Score"})
    score: number = 0;

    @property({displayName: "Min Duration", tooltip: "Min Star Duration"})
    minStarDuration: number = 0;
    @property({displayName: "Max Duration", tooltip: "Max Star Duration"})
    maxStarDuration: number = 0;

    onLoad(): void {
        this.yGround = this.ground.y + this.ground.height/2; // try this.ground.top instead
        this.spawnNewStar();
    }

    start () {

    }

    private spawnNewStar(): void {

        var newStar = cc.instantiate(this.starPrefab);
        this.node.addChild(newStar);
        newStar.setPosition(this.calcRandomPosition());

    }

    private calcRandomPosition(): cc.Vec2 {

        // According to the position of the ground level and the main character's jump height, 
        // randomly obtain an anchor point of the star on the y axis
        const randY = this.yGround + Math.random() * this.player.getComponent('Player').jumpHeight + 50;

        // according to the width of the screen, 
        // randomly obtain an anchor point of star on the x axis
        const maxX = this.node.width/2;
        const randX = (Math.random() - 0.5) * 2 * maxX;

        // return to the anchor point of the star
        return cc.v2(randX, randY);
    }

}
