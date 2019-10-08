(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/subpackage/First/test-first.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '912795WyhhNJ7ssdtf4at3V', 'test-first', __filename);
// cases/subpackage/First/test-first.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        tips: require('LabelLocalized')
    },

    start: function start() {
        this.tips.textKey = 'cases/subpackage1.loaded';
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
        //# sourceMappingURL=test-first.js.map
        