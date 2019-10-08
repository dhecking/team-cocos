"use strict";
cc._RF.push(module, '9bf9cWgTmNAapAWiQT08YdJ', 'StorageUtil');
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