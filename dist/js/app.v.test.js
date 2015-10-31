"use strict";

define(["app.v", "json!menuData"], function (MenuView, data) {

    describe("MenuView", function () {

        beforeEach(function () {
            this.view = new MenuView();
            this.view.domEl = "menu_holder";
            this.dataURI = "/base/public/js/data/menu.data.json";
            this.data = data;
        });

        it("should menu to be defined", function () {
            expect(this.view).toBeDefined();
        });

        it("should return an object", function () {
            expect(this.view).toEqual(jasmine.any(Object));
        });

        it("should have render method", function () {
            expect(this.view.render).toBeDefined();
        });

        it("should have a template defined", function () {
            expect(this.view.template).toBeDefined();
        });

        it("should have createElement method", function () {
            expect(this.view.createEl).toBeDefined();
        });

        it("should have a setEvent method", function () {
            expect(this.view.setEvent).toBeDefined();
        });

        describe("#createElement", function () {
            it("should create an element in the DOM", function () {
                var ul = this.view.createEl("ul");
                expect(ul.outerHTML).toEqual("<ul></ul>");
            });
        });

        describe("#render", function () {
            it("should return error if no data is sent", function () {
                var view = this.view.render();
                expect(view).toEqual("Please provide data");
            });

            it("should return error if no menu class is provided", function () {
                var view = this.view.render({ general: "test", navigation: "test" });
                expect(view).toEqual("Please provide an menu selector");
            });

            it("should return error if menu class selector not found", function () {
                var view = this.view.render({ general: "test", navigation: "test" }, ".test");
                expect(view).toEqual("Selector class not found .test");
            });

            it("should have a dom element set", function () {
                var view = this.view.render(this.dataURI, "." + this.view.domEl);
                expect(this.view.domEl).toEqual("menu_holder");
            });

            it("should call setEvent if all params are correct", function () {
                var el = this.view.createEl("div");
                el.className = this.view.domEl;
                document.body.appendChild(el);
                var render = this.view.render(this.data, "." + this.view.domEl);
                expect(render).not.toBeDefined();

                //clean the DOM
                document.body.removeChild(el);
            });
        });

        describe("#setEvent", function () {

            beforeEach(function () {
                var el = this.el = this.view.createEl('div');
                el.className = this.view.domEl;
                document.body.appendChild(el);
            });

            afterEach(function () {
                document.body.removeChild(this.el);
            });

            it("should return error if the domEl is string class", function () {
                var ev = this.view.setEvent(".menu_holder");
                expect(ev).toEqual("Please provide element and not class");
            });

            it("should return error if the element is undefined", function () {
                var ev = this.view.setEvent();
                expect(ev).toEqual("undefined is undefined");
            });

            it("should return message if there are no children for this element", function () {
                var ev = this.view.setEvent(this.el);
                expect(ev).toEqual("No children found for the element");
            });

            it("should add event listeners to the children of the elements", function () {
                var render = this.view.render(this.data, "." + this.view.domEl);
            });
        });

        describe("#menuTree", function () {
            it("shoul be defined", function () {
                expect(this.view.menuTree).toBeDefined();
            });
        });

        describe("#firstLvlEvnt", function () {
            it("should be defined", function () {
                expect(this.view.firstLvlEvent).toBeDefined();
            });
        });

        describe("#arrFromObj", function () {
            it("should be defined", function () {
                expect(this.view.arrFromObj).toBeDefined();
            });
        });
    });
});