// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = {sum};

let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    const valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
};

// Función para convertir de Dólares a Yenes
const fromDollarToYen = (valueInDollar) => {
    // Primero convertir de Dólares a Euros
    const valueInEuro = valueInDollar / oneEuroIs.USD;
    // Luego convertir de Euros a Yenes
    return valueInEuro * oneEuroIs.JPY;
};

// Función para convertir de Yenes a Libras Esterlinas
const fromYenToPound = (valueInYen) => {
    // Primero convertir de Yenes a Euros
    const valueInEuro = valueInYen / oneEuroIs.JPY;
    // Luego convertir de Euros a Libras Esterlinas
    return valueInEuro * oneEuroIs.GBP;
};

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}
