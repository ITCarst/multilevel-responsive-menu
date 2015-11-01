"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["app.c"], function (MenuController) {
    var App =

    /*
     * Main App Constructor - Menu
     * Get's the conf and render's the view
     * @param {conf} - configuration sent by user or default
     */
    function App(conf) {
        _classCallCheck(this, App);

        var controller = new MenuController(conf);
        //render the view
        controller.renderView();
    };

    return App;
});