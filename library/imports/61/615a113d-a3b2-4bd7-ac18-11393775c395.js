"use strict";
cc._RF.push(module, '615a1E9o7JL16wYETk3dcOV', 'compressed-texture');
// cases/01_graphics/compressed-texture/compressed-texture.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        sprite: {
            default: null,
            type: cc.Sprite
        },
        infoLabel: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var texture = this.sprite.spriteFrame.getTexture();
        this.infoLabel.string = texture.url + '@' + texture.getPixelFormat();
    }
}

// update (dt) {},
);

cc._RF.pop();