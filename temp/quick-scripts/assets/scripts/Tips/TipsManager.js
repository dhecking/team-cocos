(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Tips/TipsManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6c9bezFtu5AHZUcydh+6QJj', 'TipsManager', __filename);
// scripts/Tips/TipsManager.js

'use strict';

//
// Restricted the scenes platform permissions
//

// init platform info
var isAndroid = cc.sys.platform === cc.sys.ANDROID;
var isNative = cc.sys.isNative;
var isBrowser = cc.sys.isBrowser;
var isMobile = cc.sys.isMobile;
var isIphone = cc.sys.platform === cc.sys.IPHONE;
var isDesktopBrowser = cc.sys.platform === cc.sys.DESKTOP_BROWSER;

var isWechat = cc.sys.platform === cc.sys.WECHAT_GAME;
var isQQPlay = cc.sys.platform === cc.sys.QQ_PLAY;
var isBaidu = cc.sys.platform === cc.sys.BAIDU_GAME;
var isVivo = cc.sys.platform === cc.sys.VIVO_GAME;
var isOPPO = cc.sys.platform === cc.sys.OPPO_GAME;
var isXiaomi = cc.sys.platform === cc.sys.XIAOMI_GAME;
var isHuawei = cc.sys.platform === cc.sys.HUAWEI_GAME;
var isJkw = cc.sys.platform === cc.sys.JKW_GAME;
var isAlipay = cc.sys.platform === cc.sys.ALIPAY_GAME;

module.exports = {
    tispPrefab: null,

    SupportConfig: function SupportConfig(name) {
        console.log(name);
        switch (name) {
            case 'downloader-web':
                return !isNative;
            case 'EditBoxTabIndex':
                return !isNative && !isAlipay;
            case 'EditBox':
            case 'EditBoxEvent':
                return !isAlipay;
            case 'OnMultiTouchInput':
                return isMobile;
            case 'webp-test':
                return cc.sys.capabilities['webp'];
            case 'DeviceMotion':
                return isMobile && !isQQPlay && !isVivo;
            case 'Native_Call':
                return isMobile && isAndroid && !CC_RUNTIME;
            case 'TTFFontLabel':
                return !isQQPlay;
            case 'Subpackages':
                return !CC_PREVIEW && !CC_JSB && !isBrowser && !isQQPlay && !isJkw;
            case 'MousePropagation':
                return isNative && !isMobile && !isWechat && !isQQPlay && !isXiaomi && !isHuawei && !isAlipay || isDesktopBrowser;
            case 'downloader-native':
                return isNative && !CC_RUNTIME;
            // Not support the VIVO_GAME and OPPO_GAME
            case 'capture_to_native':
                return isNative && !isVivo && !isOPPO;
            case 'iOS_getSafeArea':
                return isIphone && isNative;
            case 'capture_to_wechat':
                return isWechat;
            case 'capture_to_web':
            case 'ShadowLabel':
                return isBrowser;

            // Only support the RENDER_TYPE_WEBGL
            case 'MotionStreak':
            case 'Mask_IMAGE_STENCIL':
            case 'Mask_NESTED':
                return cc.game.renderType === cc.game.RENDER_TYPE_WEBGL;

            // Not support isMobile
            case 'KeyboardInput':
            case 'platform':
                return !isMobile && !isWechat && !isBaidu && !isXiaomi && !isHuawei && !isAlipay;

            // Not support the Simulator, QQ_PLAY, WECHAT_GAME
            case 'videoPlayer':
                return (isMobile || isBrowser) && !CC_RUNTIME && !isQQPlay && !isBaidu && !isXiaomi && !isHuawei && !isAlipay;

            // Not support the VIVO_GAME, OPPO_GAME, WECHAT_GAME, QQ_PLAY, CC_RUNTIME
            case 'webview':
                return (isMobile || isBrowser) && !CC_RUNTIME && !isQQPlay && !isWechat && !isBaidu && !isXiaomi && !isHuawei && !isAlipay;
            case 'mesh':
                return !isVivo && !isOPPO;
        }
    },

    init: function init() {
        var _this = this;

        if (this.tipsPrefab) return;

        cc.loader.loadRes('tips/Tips', function (err, prefab) {
            _this.tipsPrefab = prefab;
        });
    },
    createTips: function createTips(content) {
        var node = cc.instantiate(this.tipsPrefab);
        var tipsCtrl = node.getComponent('TipsCtrl');
        if (content) {
            tipsCtrl.setContent(content);
        }
        node.parent = cc.director.getScene();
    },
    hasSupport: function hasSupport(name, hideTip) {
        var support = this.SupportConfig(name);
        if (!support && support !== undefined) {
            if (!hideTip) {
                this.createTips();
            }
            return false;
        }
        return true;
    }
};

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
        //# sourceMappingURL=TipsManager.js.map
        