const {ccclass, property} = cc._decorator;

@ccclass
export default class Star extends cc.Component {

    // When the distance between the star and main character is less 
    // than this value, collection of the point will be completed
    @property
    pickRadius: number = 0;

    start () {

    }

}
