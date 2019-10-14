const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    yGround: number = 0;
    score: number = 0;
    timer: number = 0;
    peachDuration: number = 0;

    @property(cc.Label)
    scoreDisplay: cc.Label = null;
    @property
    scoreAudio: cc.AudioClip = null;

    @property(cc.Node)
    ground: cc.Node = null;
    @property(cc.Node)
    player: cc.Node = null;
    @property(cc.Prefab)
    peachPrefab: cc.Prefab = null;

    @property({displayName: "Min Duration"})
    minPeachDuration: number = 0;
    @property({displayName: "Max Duration"})
    maxPeachDuration: number = 0;

    onLoad(): void {
        cc.debug.setDisplayStats(false);
        this.yGround = this.ground.y + this.ground.height/2; 
        this.spawnNewPeach();
        
    }

    update(dt: number) {
        // update timer for each frame, when a new peach is not 
        // generated after exceeding duration invoke the logic of game failure
        if (this.timer > this.peachDuration) {
            this.gameOver();
            return;
        }
        this.timer += dt;
    }

    gameOver(): void {
        if(this.player){
            this.player.stopAllActions(); //stop the jumping action of the player node
            //TEMP: cc.director.loadScene('game');
        }

    }

    increaseScore(): void {
        this.score++;
        // update the words of the scoreDisplay Label
        this.scoreDisplay.string = 'Score: ' + this.score;

        this.playScoreSound();
    }

    spawnNewPeach(): void {

        const newPeach = cc.instantiate(this.peachPrefab);

        // Staging a reference of Game object on a peach component
        newPeach.getComponent("Peach").game = this;

        this.node.addChild(newPeach);
        newPeach.setPosition(this.calcRandomPosition());

        // reset timer, randomly choose a value according the scale of peach duration
        this.peachDuration = this.minPeachDuration + Math.random() * (this.maxPeachDuration - this.minPeachDuration);
        this.timer = 0;

    }

    calcRandomPosition(): cc.Vec2 {

        // According to the position of the ground level and the main character's jump height, 
        // randomly obtain an anchor point of the peach on the y axis
        const randY = this.yGround + Math.random() * this.player.getComponent('Player').jumpHeight + 50;

        // according to the width of the screen, 
        // randomly obtain an anchor point of peach on the x axis
        const maxX = this.node.width/2;
        const randX = (Math.random() - 0.5) * 2 * maxX;

        // return to the anchor point of the peach
        return cc.v2(randX, randY);
    }

    playScoreSound(){
        // console.log("> Game::playScoreSound()");

        cc.audioEngine.playEffect(this.scoreAudio, false);

        // console.log("< Game::playScorepSound()");
    }

}
