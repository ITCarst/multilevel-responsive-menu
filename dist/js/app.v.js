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
                        //set active || "" to the first level menu
                        //show hide the subnav
                        if (target === flc) {
                            var firstLvlClass = firstLvl.className;
                            firstLvlClass === "" ? firstLvlClass = "active" : firstLvlClass = "";
                            firstLvl.className = firstLvlClass;
                        }

                        if (flc.className !== "" && flc.className === "subnav") {
                            console.log("subnav", flc.children);
                        }
                    });
                }
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
                Array.from(obj).forEach(function (nav) {
                    arr.push(nav);
                });
                return arr;
            }
        }]);

        return MenuView;
    })();

    return MenuView;
});