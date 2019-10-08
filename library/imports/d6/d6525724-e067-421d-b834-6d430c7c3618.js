"use strict";
cc._RF.push(module, 'd6525ck4GdCHbg0bUMMfDYY', 'ButtonTransition');
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