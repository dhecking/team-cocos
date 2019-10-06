const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    @property({displayName: "Score", tooltip: "Current Score"})
    score: number = 0;

    @property({displayName: "Min Existence", tooltip: "Stars must exist for given duration"})
    minStarDuration: number = 0;
    @property({displayName: "Max Existence", tooltip: "Stars must expire before given duration "})
    maxStarDuration: number = 0;

    @property(cc.Node)
    ground: cc.Node = null;
    @property(cc.Node)
    player: cc.Node = null;
    @property(cc.Prefab)
    star: cc.Prefab = null;

    start () {

    }

}
