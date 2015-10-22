define(["app.m", "app.v"], function (MenuModel, MenuView) {

    class MenuController {

        constructor (conf) {
            this.model = new MenuModel();
            this.data = this.loadData();

            this.view = new MenuView(conf);

            console.log(this.view);
        }

        loadData () {
            return this.model.loadData();
        }

        renderView () {
            //render the view template
            this.view.render(this.data);
        }    
    }

    return MenuController;
});
