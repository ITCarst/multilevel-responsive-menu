"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(function () {
    var MenuModel = (function () {
        function MenuModel() {
            _classCallCheck(this, MenuModel);
        }

        _createClass(MenuModel, [{
            key: "loadData",
            value: function loadData(dataURI) {
                if (!dataURI) return "Please provide a URI, to load data from";

                return this.get(dataURI).then(JSON.parse);
            }
        }, {
            key: "get",
            value: function get(url) {
                return new Promise(function (resolve, reject) {
                    var req = new XMLHttpRequest();
                    //request type
                    req.open("GET", url);
                    req.onload = function () {
                        req.status == 200 ? resolve(req.response) : reject(Error(req.statusText));
                    };
                    req.onerror = function () {
                        reject(Error("Network Error"));
                    };
                    req.send();
                });
            }
        }]);

        return MenuModel;
    })();

    return MenuModel;
});