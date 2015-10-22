"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["app.c", "text!menuTmpl"], function (MenuController, tmpl) {
    var MenuView = (function () {
        function MenuView(conf, data) {
            _classCallCheck(this, MenuView);

            this.menuConf = conf;
        }

        _createClass(MenuView, [{
            key: "render",
            value: function render(data) {
                console.log(data);
            }
        }]);

        return MenuView;
    })();

    return MenuView;
});