test('call stack LIFO Last In First Out', () => {

	const function1 = () => {
    	function2();
    	console.log('called function 1');
    }

    const function2 = () => {
    	function3();
    	console.log('called function 2');
    }

    const function3 = () => {
    	console.log('called function 3');
    }

    function1();
});