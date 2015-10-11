define(["app.v"], function (MenuView) {

    class MenuController {

        constructor (conf) {
            this.view = new MenuView(conf);
        }

        loadView () {
            this.view.render();
        }    
    }

    return MenuController;
});
