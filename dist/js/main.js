"use strict";

require.config({
    paths: {
        text: "../../node_modules/requirejs-plugins/lib/text",
        json: '../../node_modules/requirejs-plugins/src/json',
        underscore: "../../node_modules/underscore/underscore-min",
        menuData: "public/js/data/menu.data.json",
        menuTmpl: "tmpl/menu.html"
    }
});

require(["app"], function (App) {

    var confUserDefault = {
        dataURI: "dist/js/data/menu.data.json",
        menuClass: ".menu_holder",
        respondTo: {
            width: "500px"
        }
    };

    var app = new App(confUserDefault);
});