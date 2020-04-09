// write the function sumSalaries(salaries) that returns 
// the sum of all salaries using Object.values and for..of loop.

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250,
};

function sumSalaries(salaries) {
	let salary = Object.values(salaries);
	let sum = 0;
	for (let each of salary) {
		sum += each;
	}

	return sum;
}

console.log(sumSalaries(salaries));



// with reduce()
console.log("With reduce() function");

let result = Object.values(salaries).reduce((a, b) => {
	return a + b;
});

console.log(result);
