define(["app.c"], function (MenuController) {
    
    class App {

        constructor(conf) {
            let controller = new MenuController(conf);
            controller.loadView();
        }
    }

    return App;

});
