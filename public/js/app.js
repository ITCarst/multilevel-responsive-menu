define(["app.c"], function (MenuController) {
    
    class App {

        /*
         * Main App Constructor - Menu
         * Get's the conf and render's the view
         * @param {conf} - configuration sent by user or default
         */
        constructor(conf) {
            let controller = new MenuController(conf);
            //render the view
            controller.renderView();
        }
    }

    return App;

});
