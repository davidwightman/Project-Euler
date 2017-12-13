var maxValue = 1000;

function sumOfMultiples(max) {
	var result = 0;

	for (var i = 1; i < max; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			result += i;
		}
	}

	return result;
}

console.log(sumOfMultiples(maxValue));
