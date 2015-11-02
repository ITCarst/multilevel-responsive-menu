define([
    "underscore",
    "app.c", 
    "text!menuTmpl"
], function (_, MenuController, template) {

    class MenuView {

        /* 
         * Main constructor
         * @template {templ} - the html template
         */
        constructor () {
            this.template = template;
        }        

        /*
         * Renders the template based on data on the givin elem class
         * @param {data} - JSON object || error
         * @parma {menuClass} - string || error
         */
        render (data, menuClass) {
            if (typeof data === "undefined" || data.length <= 0) return "Please provide data";
            if (typeof menuClass === "undefined") return "Please provide an menu selector";

            let domEl = document.querySelectorAll(menuClass);

            if (domEl.length <= 0) return "Selector class not found " + menuClass;
            //in case there are multiple nav's please insert code here 
            if (domEl.length >= 2) return "Please loop through domEL";

            data = data[0] || data;
            
            let navFirstLvl = data.navigation,
                templ = _.template(this.template),
                parentUL = this.createEl("ul");

            //set the menu dom element based on query selector
            domEl = this.domEl = domEl[0];
            //empty the content before
            domEl.innerHTML = "";

            //loop through data first level of the menu
            navFirstLvl.forEach(nav => {
                parentUL.innerHTML += templ(nav);
            });

            //append the ul to the menu_holder
            domEl.appendChild(parentUL);

            //sets event listener to the elements in the menu
            this.setEvent(domEl);
        }


        /*
         * Create's an DOM element
         * @param {el} - string element
         * @return {el} - DOM element
         */
        createEl (el) {
            return document.createElement(el);
        }

        /*
         * Set's event on the element
         * @param {el} - DOM element
         */
        setEvent (el) {
            if (typeof el === "undefined") return el + " is undefined";
            if (typeof el === "string") return "Please provide element and not class";
            if (el.children.length <= 0 ) return "No children found for the element";
            
            
            let firstLvlP = el.children; //first level parent
            let firstLvlC = firstLvlP[0].children; //first level children
           
            this.menuTree(firstLvlC);
        }
        
        /*
         *  Parses the menu from the JSON and adds Click || touch events
         *  @param {firstLvlC} - first lvl menu || parent obj in data
         */
        menuTree (firstLvlC) {
            let that = this;

            firstLvlC = this.arrFromObj(firstLvlC);

            firstLvlC.forEach( firstLvl => {
                firstLvl.addEventListener("click", function (ev) {
                    that.firstLvlEvent(firstLvl, ev);
                }, false);
            });
        }

        /* 
         * Set's click || touch event on the menu items if has children
         * Adds class active || "" so it show's hide the children
         * @parma {firstLvl} - the children of the firstLvlC e.g. Shop, SignIn etc.
         * @ev {event} - the click event on the parent
         */
        firstLvlEvent (firstLvl, ev) {
            let that = this,
                target = ev.target;

            if (firstLvl.children.length) {
                let firstLvlC = this.arrFromObj(firstLvl.children);

                //set active class to the clicked element 
                firstLvlC.forEach( flc => {
                    //show hide the subnav
                    if (target === flc) that.setStateClass(firstLvl, "active");
                    //check for subnav class and check for children
                    if (flc.className !== "" && flc.className === "subnav") {
                        that.secondLvlEvent(flc, ev);
                    }
                });
            }
        }

        secondLvlEvent (subnav, ev) {
            let subnavC = subnav.children, that = this,
                target = ev.target;
            subnavC = this.arrFromObj(subnavC);

            //subnav elements Ladies/Men etc.
            subnavC.forEach( sc => {
                //has subnav
                if (sc.children.length > 1) {
                    let subnavChild = that.arrFromObj(sc.children);

                    subnavChild.forEach( subnavC => {
                        if (target === subnavC) that.setStateClass(subnavC.parentNode, "active");
                        //second subnav
                        if (subnavC.className !== "" && subnavC.className === "subnav_second" ) {
                            that.thirdLvlEvent(subnavC, ev); 
                        }
                    });
                }
            });
        }

        thirdLvlEvent (secondSubnav, ev) {
            let children = this.arrFromObj(secondSubnav.children),
                that = this, target = ev.target;

            children.forEach( tc => {
                if (tc.children.length > 1) {
                    let columnsParent = that.arrFromObj(tc.children);

                    columnsParent.forEach( columns => {
                        if (target === columns) that.setStateClass(columns.parentNode, "active");
                    });
                }
            });
        }

        setStateClass (el, stateClass) {
            //set active || ""
            let elClass = el.className;
            (elClass === "") ? elClass = stateClass : elClass = "";
            el.className = elClass;
        }

        /* 
         * returns Arra from Object so map, forEach etc. can be applied
         * @param {object} - Object
         * @return {array} - Array
         */
        arrFromObj (obj) {
            let arr = [];
            Object.keys(obj).forEach( key => arr.push(obj[key]));
            return arr;
        };
    }

    return MenuView;
});
