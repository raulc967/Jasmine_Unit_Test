describe("Helpers tests", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('should give you the percent of tip that was left of the overall bill', function () {
        expect(createCurPayment().toBe({billAmt: 100, tipAmt, tipPercent: .20}));
    });

    afterEach(function() {
        billAmtInput.value = undefined;
        tipAmtInput.value = undefined;
    });
});