const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    yGround: number = 0;
    score: number = 0;
    timer: number = 0;
    starDuration: number = 0;

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

    update(dt: number) {
        // update timer for each frame, when a new star is not 
        // generated after exceeding duration invoke the logic of game failure
        if (this.timer > this.starDuration) {
            this.gameOver();
            return;
        }
        this.timer += dt;
    }

    gameOver(): void {
        this.player.stopAllActions(); //stop the jumping action of the player node
        cc.director.loadScene('game');
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

        // reset timer, randomly choose a value according the scale of star duration
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;

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
