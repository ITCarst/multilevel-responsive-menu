"use strict";

require.config({
    paths: {
        text: "../../node_modules/requirejs-plugins/lib/text",
        json: '../../node_modules/requirejs-plugins/src/json',
        menuData: "data/menu.data.json"
    }
});

require(["app"], function (App) {

    var menuConf = {
        data: "data/menu.data.json"
    };

    var app = new App(menuConf);
});