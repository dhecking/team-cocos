(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/3d/raycast.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '99487EWEA1JVpLMAPptRiG6', 'raycast', __filename);
// cases/3d/raycast.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var WHITE = cc.Color.WHITE;

cc.Class({
    extends: cc.Component,

    properties: {
        mesh: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

        this.touchPos = null;
        this.results = [];
    },
    onTouchStart: function onTouchStart(event) {
        this.touchPos = event.touch.getLocation();
    },
    onTouchMove: function onTouchMove(event) {
        this.touchPos = event.touch.getLocation();
    },
    onTouchEnd: function onTouchEnd(event) {
        this.touchPos = null;
    },
    raycast: function raycast(pos) {
        var ray = cc.Camera.main.getRay(pos);
        return cc.geomUtils.intersect.raycast(this.node, ray);
    },
    update: function update(dt) {
        for (var i = 0; i < this.results.length; i++) {
            this.results[i].node.opacity = 255;
        }
        this.results.length = 0;

        if (!this.touchPos) return;

        var ray = cc.Camera.main.getRay(this.touchPos);
        var results = cc.geomUtils.intersect.raycast(this.node, ray);
        if (results.length > 0) {
            // results[0].node.opacity = 100;

            var distance = results[0].distance;

            var d = cc.vmath.vec3.normalize(cc.v3(), ray.d);
            var p = cc.vmath.vec3.scaleAndAdd(cc.v3(), ray.o, d, distance);
            this.mesh.position = p;
        }
        this.results = results;
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
        //# sourceMappingURL=raycast.js.map
        