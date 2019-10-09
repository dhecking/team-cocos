const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = '';

    onLoad(): void {
        cc.debug.setDisplayStats(false);
    }

    start () {
        // init logic
        this.label.string = this.text;
    }
}
