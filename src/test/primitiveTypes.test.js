test('Primitive Types', () => {
	expect(typeof true).toBe('boolean');
});

test('Primitive Types', () => {
	expect(typeof Boolean(true)).toBe('boolean');
});

test('Primitive Types', () => {
	expect(typeof new Boolean(true)).toBe('object');
});

test('Primitive Types', () => {
	expect(typeof (new Boolean(true)).valueOf()).toBe('boolean');
});

test('Primitive Types', () => {
	expect(typeof 'Claudemir').toBe('string');
});

test('Primitive Types', () => {
	expect(typeof 1).toBe('number');
});

test('Primitive Types', () => {
	const doze = new Number(12);
	const quinze = doze + 3;
	expect(quinze).toBe(15);
	expect(typeof doze).toBe('object');
	expect(typeof quinze).toBe('number');
});