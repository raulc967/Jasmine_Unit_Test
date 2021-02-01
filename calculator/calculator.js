window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = getCurrentUIValues();
  values.amount = 15000;
  values.years = 6;
  values.rate = 12.5;
  calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let answer = calculateMonthlyPayment(values);
  let change = document.querySelector('#monthly-payment');
  change.innerText = answer;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = values.rate / 12;
  let x = 1 + i;
  let n = values.years * 12;
  let answer = (p * i) / (1 - Math.pow(x, -n));
  let string = answer.toFixed(2);
  updateMonthly(string);
  return string;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let string = monthly.toString();
  let monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = string;
}
