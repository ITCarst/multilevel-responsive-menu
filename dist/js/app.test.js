"use strict";

define(["app"], function (Menu) {

    describe("Menu Class", function () {

        beforeEach(function () {
            //default config
            var conf = {
                dataURI: "data/menu.data.json",
                config: {
                    menuClass: "menu_holder"
                }
            };
            this.menu = new Menu(conf);
        });

        it("should return an object", function () {
            expect(this.menu).toEqual(jasmine.any(Object));
        });
    });
});