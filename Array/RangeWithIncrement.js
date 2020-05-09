function range(start, end, increment) {
	let result = [];
	for (let i = start; i <= end; i = i + increment) {
		result.push(i);
	}
	
	return result;
}

console.log(range(1,10,2));
