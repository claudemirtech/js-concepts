test('type value', () => {
	let x = 10;
	let y = x;
	x = 20;
	expect(x).toBe(20);
	expect(y).toBe(10);
});

test('referece value', () => {
	const x = {value: 10};
	const y = x;
	x.value = 20;
	expect(x.value).toBe(20);
	expect(y.value).toBe(20);
});