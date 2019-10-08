"use strict";
cc._RF.push(module, '9221ffOiRZCRqhxaYTw/z7u', 'load-subpackage');
// cases/subpackage/load-subpackage.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        tips: require('LabelLocalized')
    },

    onLoadSubpackageCallback: function onLoadSubpackageCallback(err) {
        if (err) {
            console.error(err);
            this.tips.textKey = 'cases/subpackage.failed';
            return;
        }
        this.tips.textKey = 'cases/subpackage.complete';
    },
    loadSubpackage1: function loadSubpackage1() {
        cc.loader.downloader.loadSubpackage('First', this.onLoadSubpackageCallback.bind(this));
    },
    loadSubpackage2: function loadSubpackage2() {
        cc.loader.downloader.loadSubpackage('Second', this.onLoadSubpackageCallback.bind(this));
    },
    goSubpackage1: function goSubpackage1() {
        var _this = this;

        cc.director.loadScene('sub-first', function (err) {
            if (err) {
                _this.tips.textKey = 'cases/goSubpackage1.failed';
            }
        });
    },
    goSubpackage2: function goSubpackage2() {
        var _this2 = this;

        cc.director.loadScene('sub-second', function (err) {
            if (err) {
                _this2.tips.textKey = 'cases/goSubpackage2.failed';
            }
        });
    }
});

cc._RF.pop();