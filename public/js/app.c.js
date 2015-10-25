define(["app.m", "app.v"], function (MenuModel, MenuView) {

    const defaults = {
        dataURI: "./dist/js/data/menu.data.json",
        menuClass: ".menu_holder"
    };

    console.log(defaults);

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
            let menuClass, that = this;
            this.data = [];

            //check for the menu class where the menu is going to be rendered
            if ('config' in this.conf) {
                if ('domEl' in this.conf.config) {
                    menuClass = this.conf.config.domEl || defaults.menuClass;
                }
            }

            //check for a URI if sent by user
            if (!("dataURI" in this.conf) || this.conf.dataURI === "") this.conf.dataURI = defaults.dataURI;
            
            //load the data from the model
            that.loadData().then( (data) => {
                that.data.push(data); 
                console.log(data);
            });
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
