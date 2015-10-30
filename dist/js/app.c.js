"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["app.m", "app.v"], function (MenuModel, MenuView) {

    var defaults = {
        dataURI: "data/menu.data.json",
        menuClass: ".menu_holder"
    };

    var MenuController = (function () {

        /*
         * Main Constructor
         * @conf {object} - configuration sent by the dev
         * @this.model {object} - the main model for data
         * @this.view {object} - the view
         */

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

        /*
         * Checks for configuration and validates them
         * If all OK then fetch the data using the config
         *
         * @check {menuClass} - required class for nav rendering
         * @check {dataURI} - check if user sent a giving uri to get data
         */

        _createClass(MenuController, [{
            key: "checksConf",
            value: function checksConf() {
                var menuClass = undefined,
                    that = this;
                this.data = [];

                //check for the menu class where the menu is going to be rendered
                if ('config' in this.conf) {
                    if ('menuClass' in this.conf.config) {
                        menuClass = this.conf.config.menuClass || defaults.menuClass;
                    }
                }

                //check for a URI if sent by user
                if (!("dataURI" in this.conf) || this.conf.dataURI === "") this.conf.dataURI = defaults.dataURI;

                //load the data from the model
                that.loadData().then(function (data) {
                    //push the data into the parent scope
                    that.data.push(data);
                    that.renderView();
                });
            }

            /*
             * Load's data from the model using the giving uri
             * @return {object} - returns an object of data
             */
        }, {
            key: "loadData",
            value: function loadData() {
                return this.model.loadData(this.conf.dataURI);
            }

            /*
             * Renders the view tempalte withe data
             * @return {null} - should render view
             */
        }, {
            key: "renderView",
            value: function renderView() {
                var that = typeof this !== "undefined" ? this : {};
                //render the view
                return that.view.render(that.data, that.conf.config.menuClass);
            }
        }]);

        return MenuController;
    })();

    return MenuController;
});