const calcimc = require('../imc');

test('calculate imc', () => {
    const myimc = calcimc(110, 1.8);
    expect(myimc).toBe(33.95061728395061);
});