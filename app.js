// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)

let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

const fromDollarToYen = dollars => (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];

const fromEuroToDollar = euros => euros * oneEuroIs["USD"];

const fromYenToPound = yen => (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
