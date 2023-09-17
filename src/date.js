module.exports.newLocaleDateString = () => {
	return new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];
}

module.exports.toFixedDateTime = (date) => {
	return new Date(`${date}T12:00:00`);
}

module.exports.formatDate = (date) => {
	return new Date(`${date}T12:00:00`).toLocaleString('pt-BR', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});
}