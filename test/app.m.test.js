define(["app.m"], function (MenuModel) {

    describe("MenuModel", function () {

        let dataURI = "./base/public/js/data/menu.data.json";

        beforeEach(function () {
            this.model = new MenuModel();
        });
        
        it("should have loadData method", function () {
            expect(this.model.loadData).toBeDefined();
        });

        it("should return an array of objects", function () {
            expect(this.model.loadData(dataURI)).toEqual(jasmine.any(Object));
        });
    });
});
