"use strict";
cc._RF.push(module, '0f761EZmKhNLKJpUXTrb4fF', 'PlatformMotion');
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