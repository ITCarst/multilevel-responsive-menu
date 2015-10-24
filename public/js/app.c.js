define(["app.m", "app.v"], function (MenuModel, MenuView) {

    class MenuController {

        constructor (conf) {
            this.conf = conf;
            //init the model with the url to retrive the data later 
            this.model = new MenuModel();
            //init the view
            this.view = new MenuView();
            //checks for different configurations sent on init
            this.checksConf();
        }

        checksConf () {
            let menuClass;

            if ('config' in this.conf) {
                if ('domEl' in this.conf.config) {
                    menuClass = this.conf.config.domEl || "";
                }
            }
            //load the data from the model
            this.data = this.loadData();
        }

        loadData () {
            return this.model.loadData(this.conf.dataURI);
        }

        renderView () {
            

            //render the view
            return this.view.render(this.data);
        }
    }

    return MenuController;
});
