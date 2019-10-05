const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    speed: number = 0; 
    left: boolean = false;
    right: boolean = false;
    playerAction: cc.ActionInterval = null;

    // @property allows for editing from cocos
    @property
    accel: number = 0;
    @property
    maxSpeed: number = 0;
    @property
    jumpHeight: number = 0;
    @property
    jumpDuration: number = 0;

    onLoad(): void {
        console.log("Player::onLoad()");

        // Start players action interval
        this.playerAction = this.createPlayerActionInterval();
        this.node.runAction(this.playerAction);

        // Start listening for keyboard events
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    start () {
        console.log("Player::start()");
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

    onDestroy () {
        console.log("Player::onDestroy()");

        // Stop listening for keyboard events
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    private createPlayerActionInterval(): cc.ActionInterval {
        console.log("Player::createPlayerActionInterval()");

        // Bounce perpetually with ease
        let ascent = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        let decent = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        return cc.repeatForever(cc.sequence(ascent, decent));
    }

    onKeyDown(event: KeyboardEvent){
        console.log("Player::onKeyDown()");
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.left = true;
                break;
            case cc.macro.KEY.d:
                this.right = true;
                break;
        }
    }

    onKeyUp(event: KeyboardEvent){
        console.log("Player::onKeyUp()");
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.left = false;
                break;
            case cc.macro.KEY.d:
                this.right = false;
                break;
        }
    }

}
