const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    @property
    jumpHeight: number = 0;

    @property
    jumpDuration: number = 0;

    @property
    maxMoveSpeed: number = 0;

    @property
    accel: number = 0;
    
    start () {

    }

}
