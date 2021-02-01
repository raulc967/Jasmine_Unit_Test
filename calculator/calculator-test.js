
it('should calculate the monthly rate correctly', function () {
  let values1 = {
    amount: 12000,
    rate: 1.5,
    years: 6
  };
  expect(calculateMonthlyPayment(values1)).toBe('1500.31');
});


it("should return a result with 2 decimal places", function() {
  let value = {
    amount: 12000,
    rate: 1.5,
    years: 6
  };
  expect(calculateMonthlyPayment(value).toBe('1500.31'));
});

/// etc
