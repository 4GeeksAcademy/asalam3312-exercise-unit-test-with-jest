// Importar la función sum del archivo app.js
/* const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
}); */

test("One euro should be 1.07 dollars", ()=> {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = (3.5 * 1.07); //3.745
    // Hago mi comparación (la prueba)
    expect(dollars).toBeCloseTo(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test("3.5 dollars should be 167.455 yen", ()=> {
    // Importo la funcion desde app.js
    const { fromDolarToYen } = require('./app.js');
    // Uso la función como debe ser usada
    const yens = fromDolarToYen(3.5); 
    //1.07 dollars son 167.455 yens, entonces 3.5 dolares serían = (3.5 * 167.455)
    const expected = (3.5 * 156.5 / 1.07);
    // Hago mi comparación (la prueba)
    expect(yens).toBeCloseTo(expected);
});

test("167.455 Yen should be 145.68585000000002 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');
    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5); 
    //167.455 Yens son 145.68585000000002 Pounds, entonces 3.5 Yens serían = (3.5 * 145.68585000000002)
    const expected = (3.5 * 0.87 / 156.5);
    // Hago mi comparación (la prueba)
    expect(pounds).toBeCloseTo(expected);
});
