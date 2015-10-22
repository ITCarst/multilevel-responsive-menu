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
    });

});
