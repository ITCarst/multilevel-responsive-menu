"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["underscore", "app.c", "text!menuTmpl"], function (_, MenuController, template) {
    var MenuView = (function () {
        function MenuView() {
            _classCallCheck(this, MenuView);

            this.template = template;
        }

        _createClass(MenuView, [{
            key: "render",
            value: function render(data, menuClass) {
                if (typeof data !== "undefined" && data.length <= 0) return "Please provide data";

                data = data[0] || data;

                var navFirstLvl = data.navigation;
                var domEl = document.querySelectorAll(menuClass);

                //in case there are multiple nav's please insert code here
                if (domEl.length >= 2) return console.log("Please loop through domEL");

                domEl = this.domEl = domEl[0];
                domEl.innerHTML = "";

                var templ = _.template(this.template);
                var parentUL = this.createEl("ul");

                navFirstLvl.forEach(function (nav) {
                    parentUL.innerHTML += templ(nav);
                });
                domEl.appendChild(parentUL);

                this.setEvent(domEl);
            }
        }, {
            key: "createEl",
            value: function createEl(el) {
                var elem = document.createElement(el);

                return elem;
            }
        }, {
            key: "setEvent",
            value: function setEvent(el) {

                var nav = el.children[0];

                var navList = nav.children;

                var items = Array.from(navList);

                items.forEach(function (item, x) {

                    console.log(item.children.length);

                    //if (item.children[x].className === "subnav")
                    //  console.log(item.children)
                });
            }
        }]);

        return MenuView;
    })();

    return MenuView;
});