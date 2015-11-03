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

                //set events on the submenus if childrens are present
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
                //return array from object
                firstLvlC = this.arrFromObj(firstLvlC);
                //loop through the array and add click event
                firstLvlC.forEach(function (firstLvl) {
                    firstLvl.addEventListener("click", function (ev) {
                        //if has child build the event click for the submenus also
                        if (firstLvl.children.length > 1) that.setNavState(firstLvl, ev);
                    }, false);
                });
            }

            /*
             * On click show/hide the child/parent submenus
             * @param {navParent} - DOM element that has children
             * @param {ev} - click event
             */
        }, {
            key: "captureSubmenuEvents",
            value: function captureSubmenuEvents(navParent, ev) {
                var that = this,
                    navC = this.arrFromObj(navParent.children);

                //the children of nav
                navC.forEach(function (child) {
                    //child becomes parent and calls active states
                    if (child.children.length > 1) that.setNavState(child, ev);
                });
            }

            /*
             * Set's active || "" to the clicked element
             * @param {parent} - DOM element object
             * @param {ev} - click event
             */
        }, {
            key: "setNavState",
            value: function setNavState(parent, ev) {
                var that = this,
                    navChildren = that.arrFromObj(parent.children),
                    target = ev.target;

                navChildren.forEach(function (child) {
                    //set active class or remove it
                    if (target === child) that.toggleClassName(child.parentNode, "active");
                    //if has class recall the parent function with the new object
                    if (child.className !== "") that.captureSubmenuEvents(child, ev);
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