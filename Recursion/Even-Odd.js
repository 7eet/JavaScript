function evenness(n) {
	if ( n < 0 ){
		return undefined;
	}
	else if (n == 0) {
		return true;
	} else if (n == 1) {
		return false;
	}
	return evenness(n-2);
}

console.log( evenness(75) ? 'Even' : 'Odd');
console.log(evenness(50) ? 'Even' : 'Odd');
console.log(evenness(-2));
