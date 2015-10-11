define(["app.m"], function (MenuModel) {

    class MenuView {
        constructor (conf) {
            let model = new MenuModel(conf);
            this.data = model.loadData();

            console.log(this.data);
        }
        render () {

            console.log("render view");
        }
    }

    return MenuView;
});
