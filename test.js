// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const {fromEuroToDollar} = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("Conversion from USD to JPY (1 USD = 149.03 JPY)", function() {
    // Import the function from app.js
    const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(2)).toBe(292.5233644859813);
});

test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", function() {
    // Import the function from app.js
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(100)).toBe(0.5559105431309904);
});