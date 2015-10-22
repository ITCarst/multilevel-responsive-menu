define(["app.c"], function (MenuController) {
    
    class App {
        constructor(conf) {
            let controller = new MenuController(conf);
            //render the view
            controller.renderView();
        }
    }

    return App;

});
