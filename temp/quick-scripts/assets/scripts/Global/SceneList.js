(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Global/SceneList.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '473b8wxs55OsJvoxVdYCzTF', 'SceneList', __filename);
// scripts/Global/SceneList.js

'use strict';

var TipsManager = require('TipsManager');

var SceneList = cc.Class({
    extends: cc.Component,

    properties: {
        itemPrefab: {
            default: null,
            type: cc.Prefab
        },
        initItemCount: 0,
        scrollView: cc.ScrollView,
        bufferZone: 0, // when item is away from bufferZone, we relocate it
        searchBlock: cc.Node
    },

    createItem: function createItem(x, y, name, url) {
        var item = cc.instantiate(this.itemPrefab);
        var itemComp = item.getComponent('ListItem');
        var label = itemComp.label;
        label.string = name;

        if (url) {
            itemComp.url = url;
        }

        // item.width = w;
        item.x = x;
        item.y = y;
        this.node.addChild(item);
        return item;
    },

    init: function init(menu) {
        this.menu = menu;
        this.sceneList = [];
        this.itemList = [];
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
        TipsManager.init();
        this.initList();
    },


    // use this for initialization
    initList: function initList() {
        var scenes = cc.game._sceneInfos;
        var dict = {};

        if (scenes) {
            for (var i = 0; i < scenes.length; ++i) {
                var url = scenes[i].url;
                if (!url.startsWith('db://assets/cases/')) {
                    continue;
                }
                var dirname = cc.path.dirname(url).replace('db://assets/cases/', '');
                var scenename = cc.path.basename(url, '.fire');

                if (!dirname) dirname = '_root';
                if (!dict[dirname]) {
                    dict[dirname] = {};
                }
                dict[dirname][scenename] = url;
            }
        } else {
            cc.error('failed to get scene list!');
        }
        // compile scene dict to an array
        var dirs = Object.keys(dict);
        dirs.sort();
        for (var _i = 0; _i < dirs.length; ++_i) {
            this.sceneList.push({
                name: dirs[_i],
                url: null
            });
            var scenenames = Object.keys(dict[dirs[_i]]);
            scenenames.sort();
            for (var j = 0; j < scenenames.length; ++j) {
                var name = scenenames[j];
                var _url = dict[dirs[_i]][name];
                this.sceneList.push({ name: name, url: _url });
            }
        }
        var y = 0;
        this.node.height = (this.sceneList.length + 1) * 50;
        var initItemCount = Math.min(this.initItemCount, this.sceneList.length);
        for (var _i2 = 0; _i2 < initItemCount; ++_i2) {
            var item = cc.instantiate(this.itemPrefab).getComponent('ListItem');
            var itemInfo = this.sceneList[_i2];
            item.init(this.menu);
            this.node.addChild(item.node);
            y -= 50;
            item.updateItem(_i2, y, itemInfo.name, itemInfo.url);
            this.itemList.push(item);
        }

        // get item list in order to check the loadScene condition
        var searchComp = this.searchBlock.getComponent('SearchBlock');
        searchComp.init(this.menu);
        searchComp.setItemList(this.sceneList);
    },


    getPositionInView: function getPositionInView(item) {
        // get item position in scrollview's node space
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) {
            return; // we don't need to do the math every frame
        }
        this.updateTimer = 0;
        var items = this.itemList;
        var buffer = this.bufferZone;
        var isDown = this.node.y < this.lastContentPosY; // scrolling direction
        var curItemCount = this.itemList.length;
        var offset = 50 * curItemCount;
        for (var i = 0; i < curItemCount; ++i) {
            var item = items[i];
            var itemNode = item.node;
            var viewPos = this.getPositionInView(itemNode);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && itemNode.y + offset < 0) {
                    var newIdx = item.index - curItemCount;
                    var newInfo = this.sceneList[newIdx];
                    item.updateItem(newIdx, itemNode.y + offset, newInfo.name, newInfo.url);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && itemNode.y - offset > -this.node.height) {
                    var _newIdx = item.index + curItemCount;
                    var _newInfo = this.sceneList[_newIdx];
                    item.updateItem(_newIdx, itemNode.y - offset, _newInfo.name, _newInfo.url);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.node.y;
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
        //# sourceMappingURL=SceneList.js.map
        