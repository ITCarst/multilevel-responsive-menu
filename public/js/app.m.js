define(["json!menuData"], function (data) {

    class MenuModel {
        constructor (conf) {
            this.conf = conf;
            this.data = data;
        }   

        loadData () {
            return this.data;

        } 
    }

    return MenuModel;
});
