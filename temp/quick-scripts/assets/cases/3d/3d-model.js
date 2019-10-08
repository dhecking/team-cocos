(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/3d/3d-model.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5f96dFONrhFoosfPR7q5e94', '3d-model', __filename);
// cases/3d/3d-model.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        playingIndex: 0
    },

    start: function start() {
        this.playNextAnimation();
    },
    playNextAnimation: function playNextAnimation() {
        var animation = this.getComponent(cc.Animation);
        var clips = animation.getClips();
        if (!clips[this.playingIndex]) {
            this.playingIndex = 0;
        }

        animation.play(clips[this.playingIndex].name);
        this.playingIndex++;
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
        //# sourceMappingURL=3d-model.js.map
        