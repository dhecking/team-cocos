(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/16_safeArea/SafeArea/SafeAreaCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fefb3kgNq9MhpUV3012X6AE', 'SafeAreaCtrl', __filename);
// cases/02_ui/16_safeArea/SafeArea/SafeAreaCtrl.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        tip: cc.Label,
        graphics: cc.Graphics,
        _rightMenu: cc.Node,
        _rect: cc.Rect
    },

    start: function start() {
        if (cc.sys.os !== cc.sys.OS_IOS) {
            return;
        }
        this._rect = cc.sys.getSafeAreaRect();
        var canvasSize = cc.view.getVisibleSize();
        this.graphics.rect(-canvasSize.width / 2 + this._rect.x, -canvasSize.height / 2 + this._rect.y, this._rect.width, this._rect.height);
        this.graphics.fillColor = new cc.color(241, 148, 138, 66);
        this.graphics.fill();
        this.graphics.stroke();
        this.tip.string = this._rect;

        // move menu btns to safe area
        this._rightMenu = cc.find('Menu/Right Menu');
        this._rightMenu.x -= this._rect.x;
    },
    onDisable: function onDisable() {
        if (this._rightMenu) this._rightMenu.x += this._rect.x;
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
        //# sourceMappingURL=SafeAreaCtrl.js.map
        