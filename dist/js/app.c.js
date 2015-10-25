"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["app.m", "app.v"], function (MenuModel, MenuView) {

    var defaults = {
        dataURI: "./dist/js/data/menu.data.json",
        menuClass: ".menu_holder"
    };

    console.log(defaults);

    var MenuController = (function () {
        function MenuController(conf) {
            _classCallCheck(this, MenuController);

            this.conf = conf;
            //init the model with the url to retrive the data later
            this.model = new MenuModel();
            //init the view
            this.view = new MenuView();
            //checks for different configurations sent on init
            this.checksConf();
        }

        _createClass(MenuController, [{
            key: "checksConf",
            value: function checksConf() {
                var menuClass = undefined,
                    that = this;
                this.data = [];

                //check for the menu class where the menu is going to be rendered
                if ('config' in this.conf) {
                    if ('domEl' in this.conf.config) {
                        menuClass = this.conf.config.domEl || defaults.menuClass;
                    }
                }

                //check for a URI if sent by user
                if (!("dataURI" in this.conf) || this.conf.dataURI === "") this.conf.dataURI = defaults.dataURI;

                //load the data from the model
                that.loadData().then(function (data) {
                    that.data.push(data);
                    console.log(data);
                });
            }
        }, {
            key: "loadData",
            value: function loadData() {
                return this.model.loadData(this.conf.dataURI);
            }
        }, {
            key: "renderView",
            value: function renderView() {
                //render the view
                return this.view.render(this.data);
            }
        }]);

        return MenuController;
    })();

    return MenuController;
});