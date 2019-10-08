"use strict";
cc._RF.push(module, 'b8182lpDXBKXKHB4KDgd7AY', 'rotate');
// cases/3d/rotate.js

"use strict";

cc.Class({
    extends: cc.Component,

    update: function update() {
        this.node.eulerAngles = cc.v3(0, Date.now() / 10, 0);
    }
});

cc._RF.pop();