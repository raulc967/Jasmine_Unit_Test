describe("Helpers tests", function() {
    it('should give you the percent of tip that was left of the overall bill', function () {
        expect(calculateTipPercent(100, 20).toBe(.20));
    });
});