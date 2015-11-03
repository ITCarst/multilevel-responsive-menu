"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["underscore", "app.c", "text!menuTmpl"], function (_, MenuController, template) {
    var MenuView = (function () {

        /* 
         * Main constructor
         * @template {templ} - the html template
         */

        function MenuView() {
            _classCallCheck(this, MenuView);

            this.template = template;
        }

        /*
         * Renders the template based on data on the givin elem class
         * @param {data} - JSON object || error
         * @parma {menuClass} - string || error
         */

        _createClass(MenuView, [{
            key: "render",
            value: function render(data, menuClass) {
                if (typeof data === "undefined" || data.length <= 0) return "Please provide data";
                if (typeof menuClass === "undefined") return "Please provide an menu selector";

                var domEl = document.querySelectorAll(menuClass);

                if (domEl.length <= 0) return "Selector class not found " + menuClass;
                //in case there are multiple nav's please insert code here
                if (domEl.length >= 2) return "Please loop through domEL";

                data = data[0] || data;

                var navFirstLvl = data.navigation,
                    templ = _.template(this.template),
                    parentUL = this.createEl("ul");

                //set the menu dom element based on query selector
                domEl = this.domEl = domEl[0];
                //empty the content before
                domEl.innerHTML = "";

                //loop through data first level of the menu
                navFirstLvl.forEach(function (nav) {
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
        }, {
            key: "createEl",
            value: function createEl(el) {
                return document.createElement(el);
            }

            /*
             * Set's event on the element
             * @param {el} - DOM element
             */
        }, {
            key: "setEvent",
            value: function setEvent(el) {
                if (typeof el === "undefined") return el + " is undefined";
                if (typeof el === "string") return "Please provide element and not class";
                if (el.children.length <= 0) return "No children found for the element";

                var firstLvlP = el.children; //first level parent
                var firstLvlC = firstLvlP[0].children; //first level children

                this.menuTree(firstLvlC);
            }

            /*
             *  Parses the menu from the JSON and adds Click || touch events
             *  @param {firstLvlC} - first lvl menu || parent obj in data
             */
        }, {
            key: "menuTree",
            value: function menuTree(firstLvlC) {
                var that = this;

                firstLvlC = this.arrFromObj(firstLvlC);

                firstLvlC.forEach(function (firstLvl) {
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
        }, {
            key: "firstLvlEvent",
            value: function firstLvlEvent(firstLvl, ev) {
                var that = this,
                    target = ev.target;

                if (firstLvl.children.length) {
                    var firstLvlC = this.arrFromObj(firstLvl.children);
                    //set active class to the clicked element
                    firstLvlC.forEach(function (flc) {
                        //show hide the subnav
                        if (target === flc) that.toggleClassName(firstLvl, "active");
                        //check for subnav class and check for children
                        if (flc.className !== "" && flc.className === "subnav") {
                            that.secondLvlEvent(flc, ev);
                        }
                    });
                }
            }
        }, {
            key: "secondLvlEvent",
            value: function secondLvlEvent(subnav, ev) {
                var subnavC = this.arrFromObj(subnav.children),
                    that = this,
                    target = ev.target;

                //subnav elements Ladies/Men etc.
                subnavC.forEach(function (sc) {
                    //has subnav
                    if (sc.children.length > 1) {
                        var subnavChild = that.arrFromObj(sc.children);

                        subnavChild.forEach(function (subnavC) {
                            if (target === subnavC) that.toggleClassName(subnavC.parentNode, "active");
                            //second subnav
                            if (subnavC.className !== "" && subnavC.className === "subnav_second") {
                                console.log("here");
                                that.thirdLvlEvent(subnavC, ev);
                            }
                        });
                    }
                });
            }
        }, {
            key: "captureSubmenuEvents",
            value: function captureSubmenuEvents(navParent, ev) {
                var that = this;
                var navC = this.arrFromObj(navParent.children);
                var target = ev.target;

                navC.forEach(function (child) {

                    //child becomes parent
                    if (child.children.length > 1) {

                        var childToParent = that.arrFromObj(child.children);

                        childToParent.forEach(function (child) {

                            if (target === child) {
                                that.toggleClassName(child.parentNode, "active");
                                console.log("call again");
                            }
                        });
                    }
                });
            }
        }, {
            key: "thirdLvlEvent",
            value: function thirdLvlEvent(secondSubnav, ev) {
                var children = this.arrFromObj(secondSubnav.children),
                    that = this,
                    target = ev.target;

                children.forEach(function (tc) {

                    if (tc.children.length > 1) {

                        var columnsParent = that.arrFromObj(tc.children);

                        columnsParent.forEach(function (columns) {
                            if (target === columns) that.toggleClassName(columns.parentNode, "active");
                        });
                    }
                });
            }

            /*
             * Set's stateClass as className to element or leave's it empty
             * @param {el} - DOM element
             * @parma {stateClas} - string, class name
             */
        }, {
            key: "toggleClassName",
            value: function toggleClassName(el, stateClass) {
                //set active || ""
                var elClass = el.className;
                elClass === "" ? elClass = stateClass : elClass = "";
                el.className = elClass;
            }

            /* 
             * returns Arra from Object so map, forEach etc. can be applied
             * @param {object} - Object
             * @return {array} - Array
             */
        }, {
            key: "arrFromObj",
            value: function arrFromObj(obj) {
                var arr = [];
                Object.keys(obj).forEach(function (key) {
                    return arr.push(obj[key]);
                });
                return arr;
            }
        }]);

        return MenuView;
    })();

    return MenuView;
});