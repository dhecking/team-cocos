const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    yGround: number = 0;
    score: number = 0;

    @property(cc.Label)
    scoreDisplay: cc.Label = null;

    @property(cc.Node)
    ground: cc.Node = null;
    @property(cc.Node)
    player: cc.Node = null;
    @property(cc.Prefab)
    starPrefab: cc.Prefab = null;

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

    increaseScore(): void {
        this.score++;
        // update the words of the scoreDisplay Label
        this.scoreDisplay.string = 'Score: ' + this.score;
    }

    spawnNewStar(): void {

        const newStar = cc.instantiate(this.starPrefab);

        // Staging a reference of Game object on a star component
        newStar.getComponent("Star").game = this;

        this.node.addChild(newStar);
        newStar.setPosition(this.calcRandomPosition());

    }

    calcRandomPosition(): cc.Vec2 {

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
