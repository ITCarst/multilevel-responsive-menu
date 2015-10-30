"use strict";

define(["app.v"], function (MenuView) {

    describe("MenuView", function () {

        beforeEach(function () {
            this.view = new MenuView();
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
    });
});