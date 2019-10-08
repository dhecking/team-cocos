"use strict";
cc._RF.push(module, 'cf55fSDhJtE4YLQLmUchrgd', 'custom_material');
// cases/06_rendering/custom_material/custom_material.js

'use strict';

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
        sprite: cc.Sprite,
        speed: 0.1
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.time = 0;
    },
    update: function update(dt) {
        if (!this.sprite) return;

        this.time += dt * this.speed;

        var material = this.sprite.getMaterial(0);
        material.setProperty('time', this.time);
    }
});

cc._RF.pop();