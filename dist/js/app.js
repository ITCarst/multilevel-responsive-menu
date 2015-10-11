"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["app.c"], function (MenuController) {
    var App = function App(conf) {
        _classCallCheck(this, App);

        var controller = new MenuController(conf);
        controller.loadView();
    };

    return App;
});