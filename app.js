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

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDolarToYen = function(){
    let valueInYen = oneEuroIs.USD * oneEuroIs.JPY;
    return valueInYen; //167.455
};
const fromYenToPound = function (){
    let valueInPound = (oneEuroIs.USD * oneEuroIs.JPY) * oneEuroIs.GBP;
    return valueInPound; //145.68585000000002
}
module.exports = {/* sum,  */fromEuroToDollar, fromDolarToYen, fromYenToPound};




