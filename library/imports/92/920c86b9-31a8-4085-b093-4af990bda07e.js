"use strict";
cc._RF.push(module, '920c8a5MahAhbCTSvmQvaB+', 'Item');
// cases/02_ui/05_scrollView/ListView/Item.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        tmplID: 0,
        itemID: 0
    },

    onLoad: function onLoad() {
        this.node.on('touchend', function () {
            console.log("Item " + this.itemID + ' clicked');
        }, this);
    },

    initItem: function initItem(tmplID, itemID) {
        this.tmplID = tmplID;
        this.itemID = itemID;
        this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + this.tmplID + ' Item#' + this.itemID;
    },

    updateItem: function updateItem(itemID) {
        this.itemID = itemID;
        this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + this.tmplID + ' Item#' + this.itemID;
    }
});

cc._RF.pop();