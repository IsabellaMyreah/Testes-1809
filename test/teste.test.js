const subNum = require('../index');

test('Calcular desconto no salário', () => {
    const esperado = 2500;
    const retornado = subNum(3000, 400);

    expect(retornado).toBe(esperado);
});
