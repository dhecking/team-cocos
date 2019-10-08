"use strict";
cc._RF.push(module, '5f96dFONrhFoosfPR7q5e94', '3d-model');
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