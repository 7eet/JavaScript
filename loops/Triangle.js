let count = 6;
let result = '';
for (let i = 0; i <= count; i++) {
	for (let j = 0; j <= i; j++) {
		result += "#";
	}
	if ( i == count) {
		break;
	}
	result += "\n";
} 

console.log(result);
