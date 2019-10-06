const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    speed: number = 0; 
    left: boolean = false;
    right: boolean = false;
    playerAction: cc.ActionInterval = null;

    @property
    jumpAudio: cc.AudioClip = null;

    @property
    accel: number = 0;
    @property
    maxSpeed: number = 0;
    @property
    jumpHeight: number = 0;
    @property
    jumpDuration: number = 0;

    onLoad(): void {
        // console.log("> Player::onLoad()");

        // Start listening for keyboard events
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        // console.log("< Player::onLoad()");
    }

    onDestroy (): void {
        // console.log("> Player::onDestroy()");

        // Stop listening for keyboard events
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        // console.log("< Player::onDestroy()");
    }

    start () {
        // console.log("> Player::start()");

        // Start players action interval
        this.playerAction = this.createPlayerActionInterval();
        this.node.runAction(this.playerAction);

        // console.log("< Player::start()");
    }

    update(dt: number){

        // update directional speed 
        if(this.left){
            this.speed -= this.accel * dt; // reduce
        }
        else if (this.right){
            this.speed += this.accel * dt; // increase
        }

        // restrict player speed based on the max
        if(Math.abs(this.speed) > this.maxSpeed) {
            // if speed reach limit, use max speed with current direction
            this.speed = this.maxSpeed * this.speed / Math.abs(this.speed);
        }

        this.node.x += this.speed * dt;
    }


    private createPlayerActionInterval(): cc.ActionInterval {
        // console.log("> Player::createPlayerActionInterval()");

        // Bounce perpetually with ease
        let ascent = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        let decent = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());

        cc.callFunc(this.playJumpSound, this);

        const actionInternval = cc.repeatForever(cc.sequence(ascent, decent));
        // console.log("< Player::createPlayerActionInterval("+actionInternval+");");
        return actionInternval;
    }

    private playJumpSound(){
        // console.log("> Player::playJumpSound()");

        cc.audioEngine.playEffect(this.jumpAudio, false);

        // console.log("< Player::playJumpSound()");
    }

    private onKeyDown(event: KeyboardEvent){
        // console.log("Player::onKeyDown()");

        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.left = true;
                break;
            case cc.macro.KEY.d:
                this.right = true;
                break;
        }
    }

    private onKeyUp(event: KeyboardEvent){
        // console.log("Player::onKeyUp()");

        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.left = false;
                break;
            case cc.macro.KEY.d:
                this.right = false;
                break;
        }
        this.playJumpSound();
    }

}
