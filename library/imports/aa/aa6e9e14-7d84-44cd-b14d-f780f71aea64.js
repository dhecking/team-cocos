"use strict";
cc._RF.push(module, 'aa6e94UfYREzbFN94D3Gupk', '3d-support-info');
// cases/3d/3d-support-info.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        displayNode: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        if (cc.sys.browserType === cc.sys.BROWSER_TYPE_IE) {
            // currently ie render color is not right
            this.displayNode.active = false;
            this.node.active = true;
        } else {
            this.displayNode.active = true;
            this.node.active = false;
        }
    }
}

// update (dt) {},
);

cc._RF.pop();