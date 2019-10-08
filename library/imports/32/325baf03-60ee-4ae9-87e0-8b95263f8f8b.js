"use strict";
cc._RF.push(module, '325ba8DYO5K6Yfgi5UmP4+L', 'RotationCtrl');
// cases/03_gameplay/02_actions/Rotation/RotationCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        rotationToNode: cc.Node,
        rotateByNode: cc.Node
    },

    onToClick: function onToClick() {
        var rotationTo = cc.rotateTo(1, 90);
        this.rotationToNode.runAction(rotationTo);
    },

    onReverseToClick: function onReverseToClick() {
        var rotationTo = cc.rotateTo(1, 180);
        this.rotationToNode.runAction(rotationTo);
    },

    onToRecoverClick: function onToRecoverClick() {
        this.rotationToNode.angle = 0;
    },

    onByClick: function onByClick() {
        var rotateBy = cc.rotateBy(1, 90);
        this.rotateByNode.runAction(rotateBy);
    },

    onReverseByClick: function onReverseByClick() {
        var rotateBy = cc.rotateBy(1, 180);
        this.rotateByNode.runAction(rotateBy);
    },

    onByRecoverClick: function onByRecoverClick() {
        this.rotateByNode.angle = 0;
    }

});

cc._RF.pop();