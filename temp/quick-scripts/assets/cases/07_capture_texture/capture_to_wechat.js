(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/07_capture_texture/capture_to_wechat.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0ed55wVxhhB5p1/Ob9bQHCL', 'capture_to_wechat', __filename);
// cases/07_capture_texture/capture_to_wechat.js

'use strict';

cc.Class({
    extends: require('./textureRenderUtils'),

    start: function start() {
        var _this = this;

        this.init();
        // create the capture
        this.scheduleOnce(function () {
            var canvas = _this.createCanvas();
            _this.createImg();
            _this.saveFile(canvas);
        }, 1);
    },
    saveFile: function saveFile(tempCanvas) {
        // This is one of the ways that could save the img to your local.
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            var self = this;
            var data = {
                x: 0,
                y: 0,
                width: canvas.width,
                height: canvas.height,
                // destination file sizes
                destWidth: canvas.width,
                destHeight: canvas.height,
                fileType: 'png',
                quality: 1
                // https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePathSync.html
            };var _tempFilePath = tempCanvas.toTempFilePathSync(data);
            cc.log('Capture file success!' + _tempFilePath);
            self.label.string = '图片加载完成，等待本地预览';
            // https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.previewImage.html
            wx.previewImage({
                urls: [_tempFilePath],
                success: function success(res) {
                    cc.log('Preview image success.');
                    self.label.string = '';
                }
            });
        } else {
            var _self = this;
            _self.label.string = '该样例只支持微信小游戏平台';
            cc.log('该样例只支持微信小游戏平台');
        }
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
        //# sourceMappingURL=capture_to_wechat.js.map
        