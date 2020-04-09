// write the destructing assignment that read:
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)

let user = {
	name: "Alice",
	years: 40,
};

let {name: name, years: age, isAdmin = false} = user;

console.log(`${name} is ${age} years old`);
console.log(`isAdmin: ${isAdmin}`);
