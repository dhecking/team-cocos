(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/3d/rotate.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b8182lpDXBKXKHB4KDgd7AY', 'rotate', __filename);
// cases/3d/rotate.js

"use strict";

cc.Class({
    extends: cc.Component,

    update: function update() {
        this.node.eulerAngles = cc.v3(0, Date.now() / 10, 0);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=rotate.js.map
        