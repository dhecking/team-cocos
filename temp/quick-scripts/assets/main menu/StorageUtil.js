(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/main menu/StorageUtil.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9bf9cWgTmNAapAWiQT08YdJ', 'StorageUtil', __filename);
// main menu/StorageUtil.js

'use strict';

cc.Class({
    extends: cc.Component,

    // record example-case state
    setCurrentScene: function setCurrentScene(sceneName) {
        if (!CC_PREVIEW) {
            return;
        }
        cc.sys.localStorage.setItem('current-scene', sceneName);
    },
    getCurrentScene: function getCurrentScene() {
        if (!CC_PREVIEW) {
            return;
        }
        var scene = cc.sys.localStorage.getItem('current-scene');
        if (scene) {
            return scene;
        }
        return null;
    },

    // if you want to init the example-case state
    clearStorage: function clearStorage() {
        cc.sys.localStorage.clear();
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
        //# sourceMappingURL=StorageUtil.js.map
        