(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/07_capture_texture/capture_to_web.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ac74J4RCNKq6XeV8GboJXx', 'capture_to_web', __filename);
// cases/07_capture_texture/capture_to_web.js

'use strict';

cc.Class({
    extends: require('./textureRenderUtils'),

    start: function start() {
        var _this = this;

        this.init();
        // create capture
        this.createCanvas();
        var img = this.createImg();
        this.scheduleOnce(function () {
            _this.showImage(img);
            // download the pic as the file to your local
            _this.label.string = 'Showing the capture';
        }, 1);
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
        //# sourceMappingURL=capture_to_web.js.map
        