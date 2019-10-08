"use strict";
cc._RF.push(module, '912795WyhhNJ7ssdtf4at3V', 'test-first');
// cases/subpackage/First/test-first.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        tips: require('LabelLocalized')
    },

    start: function start() {
        this.tips.textKey = 'cases/subpackage1.loaded';
    },
    goLoadSubpackage: function goLoadSubpackage() {
        cc.director.loadScene('Subpackages');
    }
});

cc._RF.pop();