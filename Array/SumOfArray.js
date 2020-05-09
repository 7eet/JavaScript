function sum(arry) {
	if ( !arry.length ) {
		return [];
	}
	let result = 0;
	for (let entry of arry) {
		result += entry;
	}
	return result;
}

console.log(sum([1,2,3]));
console.log(sum(0));
