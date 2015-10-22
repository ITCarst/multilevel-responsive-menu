define(["app.m"], function (MenuModel) {

    describe("MenuModel", function () {

        beforeEach(function () {
            this.model = new MenuModel();
        });
        
        it("should have loadData method", function () {
            expect(this.model.loadData).toBeDefined();
        });

        it("should return an array of objects", function () {
            expect(this.model.loadData()).toEqual(jasmine.any(Object));
        });


    });

});
