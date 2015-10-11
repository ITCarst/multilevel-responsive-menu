"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["json!menuData"], function (data) {
    var MenuModel = (function () {
        function MenuModel(conf) {
            _classCallCheck(this, MenuModel);

            this.conf = conf;
            this.data = data;
        }

        _createClass(MenuModel, [{
            key: "loadData",
            value: function loadData() {
                return this.data;
            }
        }]);

        return MenuModel;
    })();

    return MenuModel;
});