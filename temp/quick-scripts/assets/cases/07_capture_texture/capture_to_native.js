(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/07_capture_texture/capture_to_native.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c1a65pebNpA27eOgsyL77g/', 'capture_to_native', __filename);
// cases/07_capture_texture/capture_to_native.js

'use strict';

cc.Class({
    extends: require('./textureRenderUtils'),

    properties: {
        _width: 0,
        _height: 0
    },

    start: function start() {
        var _this = this;

        this.init();
        // create the capture
        this.schedule(function () {
            var picData = _this.initImage();
            _this.createCanvas(picData);
            _this.label.string = 'Showing the capture';
            _this.saveFile(picData);
        }, 1, 0);
    },


    // override
    initImage: function initImage() {
        var data = this.texture.readPixels();
        this._width = this.texture.width;
        this._height = this.texture.height;
        var picData = this.filpYImage(data, this._width, this._height);
        return picData;
    },


    // override init with Data
    createCanvas: function createCanvas(picData) {
        var _this2 = this;

        var texture = new cc.Texture2D();
        texture.initWithData(picData, 32, this._width, this._height);

        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);

        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;

        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = cc.director.getScene();
        // set position
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        node.x = width / 2;
        node.y = height / 2;
        node.on(cc.Node.EventType.TOUCH_START, function () {
            node.parent = null;
            _this2.label.string = '';
            node.destroy();
        });

        this.captureAction(node, width, height);
    },
    saveFile: function saveFile(picData) {
        if (CC_JSB) {
            var filePath = jsb.fileUtils.getWritablePath() + 'render_to_sprite_image.png';

            var success = jsb.saveImageData(picData, this._width, this._height, filePath);
            if (success) {
                cc.log("save image data success, file: " + filePath);
            } else {
                cc.error("save image data failed!");
            }
        }
    },


    // This is a temporary solution
    filpYImage: function filpYImage(data, width, height) {
        // create the data array
        var picData = new Uint8Array(width * height * 4);
        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            var start = srow * width * 4;
            var reStart = row * width * 4;
            // save the piexls data
            for (var i = 0; i < rowBytes; i++) {
                picData[reStart + i] = data[start + i];
            }
        }
        return picData;
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
        //# sourceMappingURL=capture_to_native.js.map
        