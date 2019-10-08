"use strict";
cc._RF.push(module, 'fee3dcLoaZCvrJ9FZrBngbb', 'loadResDir_example');
// cases/05_scripting/07_asset_loading/LoadResDir/loadResDir_example.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        btnClearAll: cc.Node,
        label: cc.Prefab,
        scrollView: cc.ScrollView
    },

    _init: function _init() {
        this._assets = [];
        this._hasLoading = false;
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
    },

    onLoad: function onLoad() {
        this._init();
    },

    _createLabel: function _createLabel(text) {
        var node = cc.instantiate(this.label);
        var label = node.getComponent(cc.Label);
        label.textKey = text;
        this.scrollView.content.addChild(node);
    },

    _clear: function _clear() {
        this.scrollView.content.removeAllChildren(true);
        for (var i = 0; i < this._assets.length; ++i) {
            var asset = this._assets[i];
            // 需要释放所有资源依赖
            var deps = cc.loader.getDependsRecursively(asset);
            cc.loader.release(deps);
        }
    },

    onClearAll: function onClearAll() {
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
        this._clear();
    },

    onLoadAll: function onLoadAll() {
        var _this = this;

        if (this._hasLoading) {
            return;
        }
        this._hasLoading = true;

        this._clear();
        this._createLabel("Load All Assets");
        this.scrollView.scrollToTop();
        this.btnClearAll.active = false; // 防止加载的过程中清除资源

        cc.loader.loadResDir("test_assets", function (err, assets) {
            if (!_this.isValid) {
                return;
            }

            _this._assets = assets;
            for (var i = 0; i < assets.length; ++i) {
                var asset = assets[i];
                var info = asset.toString();
                if (!info) {
                    if (asset instanceof cc.JsonAsset) {
                        info = JSON.stringify(asset.json, null, 4);
                    } else {
                        info = info || asset.name || cc.js.getClassName(asset);
                    }
                }
                _this._createLabel(info);
            }
            _this._hasLoading = false;
            _this.btnClearAll.active = true;
        });
    },

    onLoadSpriteFrameAll: function onLoadSpriteFrameAll() {
        var _this2 = this;

        if (this._hasLoading) {
            return;
        }
        this._hasLoading = true;

        this._clear();
        this._createLabel("Load All Sprite Frame");
        this.scrollView.scrollToTop();
        this.btnClearAll.active = false; // 防止加载的过程中清除资源

        cc.loader.loadResDir("test_assets", cc.SpriteFrame, function (err, assets) {
            if (!_this2.isValid) {
                return;
            }
            _this2._assets = assets;
            for (var i = 0; i < assets.length; ++i) {
                var asset = assets[i];
                _this2._createLabel(asset.name);
            }
            _this2._hasLoading = false;
            _this2.btnClearAll.active = true;
        });
    }
});

cc._RF.pop();