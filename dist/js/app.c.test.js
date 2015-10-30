"use strict";

define(["app.c"], function (MenuController) {

    describe("MenuController", function () {

        beforeEach(function () {
            //default
            this.conf = {
                dataURI: "./base/public/js/data/menu.data.json",
                config: {
                    menuClass: ".menu_holder"
                }
            };
            this.controller = new MenuController(this.conf);
        });

        describe("#constructor", function () {
            it("should controller to be defined", function () {
                expect(this.controller).toBeDefined();
            });

            it("should return an object", function () {
                expect(this.controller).toEqual(jasmine.any(Object));
            });

            it("should set the model", function () {
                expect(this.controller.model).toBeDefined();
                expect(this.controller.model).toEqual(jasmine.any(Object));
            });

            it("should set the conf", function () {
                expect(this.controller.conf).toBeDefined();
                expect(this.controller.conf).toEqual(jasmine.any(Object));
            });

            it("should have the config the same as was sent", function () {
                expect(this.controller.conf).toEqual(this.conf);
            });

            it("should have set the view", function () {
                expect(this.controller.view).toBeDefined();
                expect(this.controller.view).toEqual(jasmine.any(Object));
            });
        });

        describe("config", function () {
            it("should have a conf object", function () {
                expect(this.controller.conf).toEqual(jasmine.any(Object));
                expect(this.controller.conf.config).toEqual(this.conf.config);
                expect(this.controller.conf.config.menuClass).toEqual(this.conf.config.menuClass);
            });
        });

        describe("checksConf method", function () {
            it("should check the conf sent in the constructor", function () {
                expect(this.controller.checksConf).toBeDefined();
                expect(this.controller.view).toBeDefined();
                expect(this.controller.view).toEqual(jasmine.any(Object));
            });
        });

        describe("loadData", function () {

            beforeEach(function () {
                this.data = this.controller.loadData();
            });

            it("should load data from the model", function () {
                expect(this.controller.loadData).toBeDefined();
            });

            describe("get data objects", function () {
                it("should return an object of data", function () {
                    expect(this.controller.loadData()).toEqual(jasmine.any(Object));
                });
            });
        });
    });
});