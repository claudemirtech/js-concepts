const cars = require('../data/cars.json');

test('filter active cars', () => {
    const actives = cars.filter(car => car.active);
    expect(actives.length).toBe(1);
});

test('turn situation to L', () => {
	const situations = cars.map(car => {return {...car, situation: 'L'}});
	situations.forEach(car => {expect(car.situation).toBe('L')});
});