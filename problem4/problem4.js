/* A palindromic number reads the same both ways.

The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

function largestPalindromeFromProduct(){
	let max = 0;
	const palindromeCheck = product => product === product.split('').reverse().join('')

	for (let i = 999; i > 99; i--) {
	  for (let j = 999; j > 99; j--) {
	    let p = i * j;
	    if (p > max && palindromeCheck(p.toString())) {
	      max = p;
	    }
	  }
	}
	return max;
}
console.log(largestPalindromeFromProduct())