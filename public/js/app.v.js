define([
    "lodash",
    "app.c", 
    "text!menuTmpl"
], function (_, MenuController, template) {

    class MenuView {

        constructor () {
            this.template = template;
        }        

        render (data, menuClass) {
            if (data.length <= 0) return "Please provide data";

            data = data[0] || data;

            let navFirstLvl = data.navigation;
            let domEl = document.querySelectorAll(menuClass);
            //in case there are multiple nav's please insert code here 
            if (domEl.length >= 2) return console.log("Please loop through domEL");

            domEl = this.domEl = domEl[0];
            domEl.innerHTML = "";

            let templ = _.template(this.template);
            let that = this;

            navFirstLvl.forEach(nav => {
                console.log(nav);
                that.domEl.innerHTML += templ(nav);
            });


        }
    }

    return MenuView;
});
