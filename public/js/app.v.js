define(["app.c", "text!menuTmpl"], function (MenuController, tmpl) {

    class MenuView {

        constructor (conf, data) {
            this.menuConf = conf;
        }        

        render (data) {
            console.log(data);
        }
    }

    return MenuView;
});
