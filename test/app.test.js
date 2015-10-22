define(["app"], function (Menu) {

    describe("Menu Class", function () {

        beforeEach(function () {
            this.menu = new Menu();
        });

        it("should return an object", function () {
            expect(this.menu).toEqual(jasmine.any(Object));
        });
    })
})
