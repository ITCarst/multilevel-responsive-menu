define(["json!menuData"], function (data) {

    class MenuModel {

        loadData () {
            return (data) ? data : {};
        } 
    }

    return MenuModel;
});
