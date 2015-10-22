"use strict";

require.config({
    paths: {
        text: "../../node_modules/requirejs-plugins/lib/text",
        json: '../../node_modules/requirejs-plugins/src/json',
        menuData: "data/menu.data.json",
        menuTmpl: "templates/menu.html"
    }
});

require(["app"], function (App) {

    var menuConf = {
        data: "data/menu.data.json",
        config: {
            menuclass: "menu_holder",
            position: "top-left", //top-right, bottom-left, bottom-right
            slidefrom: "left-to-right", //right-to-left, top-to-bottom, bottom-to-top, dropdown
            subnav: "toggle", //slide-fade-in, slide-fade-out
            pushContent: "push-left" }
    };

    //default
    //push-right, fixed
    var conf = {
        data: "data/menu.data.json",
        config: {
            menuClass: "menu_holder"
        }
    };

    var app = new App(conf);
});