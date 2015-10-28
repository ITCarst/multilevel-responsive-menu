define([
    "underscore",
    "app.c", 
    "text!menuTmpl"
], function (_, MenuController, template) {

    class MenuView {

        constructor () {
            this.template = template;
        }        

        render (data, menuClass) {
            if (typeof data !== "undefined" && data.length <= 0) return "Please provide data";

            data = data[0] || data;

            let navFirstLvl = data.navigation;

            let domEl = document.querySelectorAll(menuClass);

            //in case there are multiple nav's please insert code here 
            if (domEl.length >= 2) return console.log("Please loop through domEL");

            domEl = this.domEl = domEl[0];
            domEl.innerHTML = "";

            let templ = _.template(this.template);
            let that = this;
            let parentUL = this.createEl("ul");

            navFirstLvl.forEach(nav => {
                parentUL.innerHTML += templ(nav);
            });

            domEl.appendChild(parentUL);

        }

        createEl (el) {
            let elem = document.createElement(el);
            
            return elem;   
        }
    }

    return MenuView;
});
