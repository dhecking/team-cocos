import Game from "./Game";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Star extends cc.Component {
    game: Game = null;

    // When the distance between the star and main character is less 
    // than this value, collection of the point will be completed
    @property
    pickRadius: number = 0;

    update(dt: number): void {

        // judge if the distance between the star and main character 
        // is less than the collecting distance for each frame
        if (this.getPlayerDistance() < this.pickRadius) {
            // invoke collecting behavior
            this.onPicked();
            return;
        }

        // update the transparency of the star according to the timer in the Game script
        const opacityRatio = 1 - this.game.timer/this.game.starDuration;
        const minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));

    }

    getPlayerDistance(): number {

        // judge the distance according to the position of the player node
        const playerPos = this.game.player.getPosition();
        // calculate the distance between two nodes according to their positions
        const dist: number = this.node.position.sub(playerPos).mag();
        return dist;

    }
    
    onPicked(): void{

        // When the stars are being collected, 
        // invoke the interface in the Game script to generate a new star
        this.game.spawnNewStar();

        // invoke the scoring method of the Game script
        this.game.increaseScore();

        // then destroy the current star's node
        this.node.destroy();

    }
}
