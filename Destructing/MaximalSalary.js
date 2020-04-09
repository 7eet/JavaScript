// create the function topSalary(salaries) that return the name of the top-paid person.

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250,
};


console.log(topSalary(salaries));

function topSalary(salaries) {

	let maxSal = 0;
	let mName = null;

	for (let [name,sal] of Object.entries(salaries)) {
		if ( maxSal < sal) {
			maxSal = sal;
			mName = name;
		}
	}

	return mName;
}
