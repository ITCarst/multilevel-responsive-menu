"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["app.m", "app.v"], function (MenuModel, MenuView) {
    var MenuController = (function () {
        function MenuController(conf) {
            _classCallCheck(this, MenuController);

            this.model = new MenuModel();
            this.data = this.loadData();

            this.view = new MenuView(conf);

            console.log(this.view);
        }

        _createClass(MenuController, [{
            key: "loadData",
            value: function loadData() {
                return this.model.loadData();
            }
        }, {
            key: "renderView",
            value: function renderView() {
                //render the view template
                this.view.render(this.data);
            }
        }]);

        return MenuController;
    })();

    return MenuController;
});