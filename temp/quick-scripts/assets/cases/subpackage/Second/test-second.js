(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/subpackage/Second/test-second.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f43242HNENDFpDggQECDo13', 'test-second', __filename);
// cases/subpackage/Second/test-second.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        tips: require('LabelLocalized')
    },

    start: function start() {
        this.tips.textKey = 'cases/subpackage2.loaded';
    },
    goLoadSubpackage: function goLoadSubpackage() {
        cc.director.loadScene('Subpackages');
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
        //# sourceMappingURL=test-second.js.map
        