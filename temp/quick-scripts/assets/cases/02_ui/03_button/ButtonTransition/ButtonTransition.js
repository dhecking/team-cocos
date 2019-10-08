(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/03_button/ButtonTransition/ButtonTransition.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd6525ck4GdCHbg0bUMMfDYY', 'ButtonTransition', __filename);
// cases/02_ui/03_button/ButtonTransition/ButtonTransition.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        btn: cc.Button
    },

    onInteractable: function onInteractable(event) {
        this.btn.interactable = event.isChecked;
    },
    onColorTransition: function onColorTransition(event) {
        this.btn.transition = cc.Button.Transition.COLOR;
    },
    onSpriteTransition: function onSpriteTransition(event) {
        this.btn.transition = cc.Button.Transition.SPRITE;
    },
    onScaleTransition: function onScaleTransition(event) {
        this.btn.transition = cc.Button.Transition.SCALE;
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
        //# sourceMappingURL=ButtonTransition.js.map
        