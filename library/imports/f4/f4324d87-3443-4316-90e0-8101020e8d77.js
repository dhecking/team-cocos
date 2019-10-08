"use strict";
cc._RF.push(module, 'f43242HNENDFpDggQECDo13', 'test-second');
// cases/subpackage/Second/test-second.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        tips: require('LabelLocalized')
    },

    start: function start() {
        this.tips.textKey = 'cases/subpackage2.loaded';
    },
    goLoadSubpackage: function goLoadSubpackage() {
        cc.director.loadScene('Subpackages');
    }
});

cc._RF.pop();