define([
    "lodash",
    "app.c", 
    "text!menuTmpl"
], function (_, MenuController, template) {

    class MenuView {

        constructor (menuClass) {
            this,menuClass = menuClass;
            //this.tmpl = _.template(template);
        }        

        render (data) {
        }
    }

    return MenuView;
});
