import { _decorator, Component } from "cc";
const { ccclass } = _decorator;

@ccclass("Toggler")
export class Toggler extends Component {
    toggleActive () {
        this.node.active = !this.node.active;
    }
}
