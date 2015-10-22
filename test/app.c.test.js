define(["app.c"], function (MenuController) {
    
    describe("MenuController", function () {

        beforeEach(function () {
            this.controller = new MenuController();
        });

        it("should controller to be defined", function () {
            expect(this.controller).toBeDefined();
        });

        it("should return an object", function () {
            expect(this.controller).toEqual(jasmine.any(Object));
        });

    });
});
