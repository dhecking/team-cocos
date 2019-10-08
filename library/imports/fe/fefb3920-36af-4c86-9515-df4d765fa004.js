"use strict";
cc._RF.push(module, 'fefb3kgNq9MhpUV3012X6AE', 'SafeAreaCtrl');
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