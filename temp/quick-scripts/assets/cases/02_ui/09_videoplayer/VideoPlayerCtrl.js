(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/09_videoplayer/VideoPlayerCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '100b5UtyNJLNaih42ednEgN', 'VideoPlayerCtrl', __filename);
// cases/02_ui/09_videoplayer/VideoPlayerCtrl.js

'use strict';

var i18n = require('i18n');
var TipsManager = require('TipsManager');

function getStatus(event) {
    switch (event) {
        case cc.VideoPlayer.EventType.PLAYING:
            return 'PLAYING';
        case cc.VideoPlayer.EventType.PAUSED:
            return 'PAUSED';
        case cc.VideoPlayer.EventType.STOPPED:
            return 'STOPPED';
        case cc.VideoPlayer.EventType.COMPLETED:
            return 'COMPLETED';
        case cc.VideoPlayer.EventType.META_LOADED:
            return 'META_LOADED';
        case cc.VideoPlayer.EventType.CLICKED:
            return 'CLICKED';
        case cc.VideoPlayer.EventType.READY_TO_PLAY:
            return 'READY_TO_PLAY';
        default:
            return 'NONE';
    }
};

cc.Class({
    extends: cc.Component,

    properties: {
        videoPlayer: cc.VideoPlayer,
        statusLabel: cc.Label,
        currentTime: cc.Label,
        resSwitchBtnLabel: cc.Label,
        controlButtons: cc.Node,
        keep_Ratio_Switch: cc.Node,
        playVideoArea: cc.Node,
        visibility: cc.Label
    },

    start: function start() {
        var _this = this;

        TipsManager.init();
        this.controlButtons.active = false;
        this.keep_Ratio_Switch.active = !(cc.sys.isBrowser || cc.sys.platform === cc.sys.WECHAT_GAME);
        this.playVideoArea.on('touchend', function () {
            _this.videoPlayer.play();
        });
    },
    onVideoPlayerEvent: function onVideoPlayerEvent(sender, event) {
        this.statusLabel.string = 'Status: ' + getStatus(event);
        if (event === cc.VideoPlayer.EventType.CLICKED) {
            if (this.videoPlayer.isPlaying()) {
                this.videoPlayer.pause();
            } else {
                this.videoPlayer.play();
            }
        } else if (event === cc.VideoPlayer.EventType.READY_TO_PLAY || event === cc.VideoPlayer.EventType.META_LOADED) {
            this.controlButtons.active = true;
            this.playVideoArea.active = true;
        } else if (event === cc.VideoPlayer.EventType.PLAYING) {
            this.playVideoArea.active = false;
        }
    },
    toggleFullscreen: function toggleFullscreen() {
        if (cc.sys.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ && cc.sys.browserVersion <= 7.2 && /Nexus 6/.test(navigator.userAgent)) {
            TipsManager.createTips(i18n.t('cases/02_ui/09_videoplayer/videoPlayer.nonsupport_fullscreen'));
            return cc.log('May be crash, so prohibit full screen');
        }
        this.videoPlayer.isFullscreen = true;
    },
    toggleVisibility: function toggleVisibility(event) {
        this.videoPlayer.node.active = !this.videoPlayer.node.active;
        this.playVideoArea.active = this.videoPlayer.node.active;
        this.visibility.string = 'Visibility: ' + this.videoPlayer.node.active;
    },
    keepRatioSwitch: function keepRatioSwitch() {
        this.videoPlayer.keepAspectRatio = !this.videoPlayer.keepAspectRatio;
    },
    switchOnlineVideo: function switchOnlineVideo() {
        this.videoPlayer.remoteURL = 'http://www.w3school.com.cn/i/movie.mp4';
        this.videoPlayer.resourceType = cc.VideoPlayer.ResourceType.REMOTE;
        this.playVideoArea.active = true;
    },
    switchLoaclVide: function switchLoaclVide() {
        this.videoPlayer.resourceType = cc.VideoPlayer.ResourceType.LOCAL;
        this.playVideoArea.active = true;
    },
    play: function play() {
        this.videoPlayer.play();
        this.playVideoArea.active = false;
    },
    pause: function pause() {
        this.videoPlayer.pause();
    },
    stop: function stop() {
        this.videoPlayer.stop();
    },
    update: function update() {
        if (this.currentTime && this.videoPlayer.currentTime >= 0) {
            this.currentTime.string = this.videoPlayer.currentTime.toFixed(2) + ' / ' + this.videoPlayer.getDuration().toFixed(2);
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
        //# sourceMappingURL=VideoPlayerCtrl.js.map
        