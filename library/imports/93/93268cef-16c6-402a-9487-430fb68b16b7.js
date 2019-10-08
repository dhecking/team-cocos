"use strict";
cc._RF.push(module, '93268zvFsZAKpSHQw+2ixa3', 'dynamic-load-material');
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