(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/3d/dynamic-load-material.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '93268zvFsZAKpSHQw+2ixa3', 'dynamic-load-material', __filename);
// cases/3d/dynamic-load-material.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        meshRenderer: cc.MeshRenderer
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var _this = this;

        this.scheduleOnce(function () {
            cc.loader.loadRes('materials/dynamic-load-material', cc.Material, function (err, material) {
                if (err) {
                    cc.error(err);
                    return;
                }
                _this.meshRenderer.setMaterial(0, material);
            });
        }, 1);
    }
}

// update (dt) {},
);

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
        //# sourceMappingURL=dynamic-load-material.js.map
        