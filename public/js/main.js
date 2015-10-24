require.config({
    paths: {
        text: "../../node_modules/requirejs-plugins/lib/text",
        json: '../../node_modules/requirejs-plugins/src/json',
        lodash : "../../node_modules/lodash/index",
        menuData: "data/menu.data.json",
        menuTmpl: "templates/menu.html"
    }
});

require(["app"], function (App) {
    
    let menuConf = {
        data: "data/menu.data.json",
        config : {
            menuclass: "menu_holder",
            position: "top-left",//top-right, bottom-left, bottom-right
            slidefrom: "left-to-right", //right-to-left, top-to-bottom, bottom-to-top, dropdown
            subnav: "toggle", //slide-fade-in, slide-fade-out
            pushContent: "push-left", //push-right, fixed
       }
    }

    //default
    let conf = {
        dataURI: "data/menu.data.json",
        config: {
            domEl: ".menu_holder"
        }
    }

    let app = new App(conf);

});
