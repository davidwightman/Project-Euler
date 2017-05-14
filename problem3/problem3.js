/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

const largestPrimeFactor = function (largeNumber){
	var factor = 2;
	while(largeNumber != factor) {
		if (largeNumber % factor === 0) {
				largeNumber = largeNumber / factor;
			} else {
				factor++;
			}
		}
		return factor
}
console.log(largestPrimeFactor(600851475143))
