(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/ComponentUtils/SearchBlock.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5fac7sHbOhNlpzkn8js40Bz', 'SearchBlock', __filename);
// scripts/ComponentUtils/SearchBlock.js

'use strict';

var TipsManager = require('TipsManager');

cc.Class({
    extends: cc.Component,

    properties: {
        editBox: cc.EditBox,
        _itemList: [],
        _isShow: false
    },

    init: function init(menu) {
        this.menu = menu;
    },
    setItemList: function setItemList(list) {
        this._itemList = list;
    },

    // searchBlock enter the special scene
    loadExample: function loadExample() {
        var sceneName = this.editBox.string;
        var url = this.findItemUrl(sceneName);
        if (!url) {
            TipsManager.createTips('Doesn\'t find that scene.');
            return;
        }

        if (TipsManager.hasSupport(sceneName)) {
            this.showSearchBlock();
            this.editBox.string = '';
            this.menu.loadScene(url);
        }
    },
    findItemUrl: function findItemUrl(sceneName) {
        for (var i = 0; i < this._itemList.length; i++) {
            var item = this._itemList[i];
            if (item.name === sceneName) {
                return item.url;
            }
        }
    },
    showSearchBlock: function showSearchBlock() {
        this._isShow = !this._isShow;
        var action = null;
        if (this._isShow) {
            action = cc.moveBy(0.5, cc.v2(0, -48));
        } else {
            action = cc.moveBy(0.5, cc.v2(0, 48));
        }
        this.node.runAction(action);
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
        //# sourceMappingURL=SearchBlock.js.map
        