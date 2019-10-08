(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/collider/Utils/PlatformMotion.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0f761EZmKhNLKJpUXTrb4fF', 'PlatformMotion', __filename);
// cases/collider/Utils/PlatformMotion.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 10,
        distance: 200
    },

    // use this for initialization
    onLoad: function onLoad() {
        this._movedDistance = this.distance / 2;
        this._direction = 1;
        this._movedDiff = 0;
    },

    update: function update(dt) {
        var d = this.speed * this._direction * dt;

        this._movedDistance += Math.abs(d);
        if (this._movedDistance > this.distance) {
            d = this.distance - this._movedDistance;
            this._movedDistance = 0;
            this._direction *= -1;
        }

        this.node.x += d;
        this._movedDiff = d;
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
        //# sourceMappingURL=PlatformMotion.js.map
        