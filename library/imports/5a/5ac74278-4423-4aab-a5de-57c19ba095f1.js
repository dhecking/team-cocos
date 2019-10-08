"use strict";
cc._RF.push(module, '5ac74J4RCNKq6XeV8GboJXx', 'capture_to_web');
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