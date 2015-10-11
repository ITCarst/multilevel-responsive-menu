"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["app.m"], function (MenuModel) {
    var MenuView = (function () {
        function MenuView(conf) {
            _classCallCheck(this, MenuView);

            var model = new MenuModel(conf);
            this.data = model.loadData();

            console.log(this.data);
        }

        _createClass(MenuView, [{
            key: "render",
            value: function render() {

                console.log("render view");
            }
        }]);

        return MenuView;
    })();

    return MenuView;
});