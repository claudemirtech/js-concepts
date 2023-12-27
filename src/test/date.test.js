const {toFixedDateTime, formatDate, newLocaleDateString} = require('../date');

test('Create a new date as string', () => {
	// we have a string date with 'yyyy-MM-dd'
	const actualDate = `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`;
	expect(newLocaleDateString()).toBe(actualDate);
});

test('Create a fixed date', () => {
	// we have a string date with 'yyyy-MM-dd'
	const originalDate = '2023-09-10';
	expect(`${toFixedDateTime(originalDate)}`).toBe('Sun Sep 10 2023 12:00:00 GMT-0300 (Horário Padrão de Brasília)');
});

test('Format Date from the string date', () => {
	// we have a string date with 'yyyy-MM-dd'
	const originalDate = '2023-09-10';
	expect(`${formatDate(originalDate)}`).toBe('10/09/2023');
});