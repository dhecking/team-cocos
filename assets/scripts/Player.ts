const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    jumpAction: cc.ActionInterval;

    @property
    jumpHeight: number = 0;

    @property
    jumpDuration: number = 0;

    @property
    maxMoveSpeed: number = 0;

    @property
    accel: number = 0;

    constructor(){
        super();
    }
    
    onLoad(){
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
    }

    start () {

    }

    private setJumpAction(): cc.ActionInterval {
        let ascent = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        let decent = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        return cc.repeatForever(cc.sequence(ascent, decent));
    }

}
