// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

// Declaramos una función con el nombre exacto "formEuroToDollar"
/* const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = 1 * oneEuroIs.USD;
    return valueInDollar;
} */
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}
/* const fromDolarToYen = function (valueInDollar){
    let valueInYen = oneEuroIS.USD * oneEuroIs.JPY;
    return valueInYen;
    console.log(oneEuroIS.USD * oneEuroIs.JPY)
} */
const fromDolarToYen = function (valueInDollar){
    let valueInYen = valueInDollar * oneEuroIs.JPY / oneEuroIs.USD;
    return valueInYen;  
}
/* const fromYenToPound = function(valueInYen){
    let valueInPound = ((oneEuroIs.USD * oneEuroIs.JPY)*oneEuroIs.GBP);
    return valueInPound;
} */
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen* oneEuroIs.GBP/oneEuroIs.JPY;
    return valueInPound;
}
/* const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * oneEuroIs.GBP;
    return valueInPound;
} */
module.exports = {fromEuroToDollar, fromDolarToYen, fromYenToPound};

const valueInDollar = fromEuroToDollar(3.5);
console.log("El valor en Dolares",valueInDollar);
const valueInYen = fromDolarToYen(3.5);
console.log("el valor en Yenes es", valueInYen); 
const valueInPound = fromYenToPound(3.5);
console.log("El valor en Pounds", valueInPound);




