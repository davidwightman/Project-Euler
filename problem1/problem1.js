(function sumOfMultiples() {
	var result = 0;
	var max = 1000;

	for (var i = 1; i < max; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			result += i;
		}
	}

	console.log(result);
})();
