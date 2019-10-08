(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/07_capture_texture/textureRenderUtils.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a886773x+pEaJGtwGtEiE9q', 'textureRenderUtils', __filename);
// cases/07_capture_texture/textureRenderUtils.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        camera: cc.Camera,
        label: cc.Label,
        _canvas: null
    },

    init: function init() {
        this.label.string = '';
        var texture = new cc.RenderTexture();
        var gl = cc.game._renderContext;
        texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, gl.STENCIL_INDEX8);
        this.camera.targetTexture = texture;
        this.texture = texture;
    },

    // create the img element
    createImg: function createImg() {
        // return the type and dataUrl
        var dataURL = this._canvas.toDataURL("image/png");
        var img = document.createElement("img");
        img.src = dataURL;
        return img;
    },

    // create the canvas and context, filpY the image Data
    createCanvas: function createCanvas() {
        var width = this.texture.width;
        var height = this.texture.height;
        if (!this._canvas) {
            this._canvas = document.createElement('canvas');

            this._canvas.width = width;
            this._canvas.height = height;
        } else {
            this.clearCanvas();
        }
        var ctx = this._canvas.getContext('2d');
        this.camera.render();
        var data = this.texture.readPixels();
        // write the render data
        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            var imageData = ctx.createImageData(width, 1);
            var start = srow * width * 4;
            for (var i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start + i];
            }

            ctx.putImageData(imageData, 0, row);
        }
        return this._canvas;
    },


    // show on the canvas
    showImage: function showImage(img) {
        var _this = this;

        var texture = new cc.Texture2D();
        texture.initWithElement(img);

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
            _this.label.string = '';
            node.destroy();
        });

        this.captureAction(node, width, height);
    },

    // sprite action
    captureAction: function captureAction(capture, width, height) {
        var scaleAction = cc.scaleTo(1, 0.3);
        var targetPos = cc.v2(width - width / 6, height / 4);
        var moveAction = cc.moveTo(1, targetPos);
        var spawn = cc.spawn(scaleAction, moveAction);
        capture.runAction(spawn);
        var blinkAction = cc.blink(0.1, 1);
        // scene action
        this.node.runAction(blinkAction);
    },
    clearCanvas: function clearCanvas() {
        var ctx = this._canvas.getContext('2d');
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
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
        //# sourceMappingURL=textureRenderUtils.js.map
        