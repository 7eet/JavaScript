// write a function count(obj) that return
// the number of properties in the object.

let user = {
 name: "John",
 age: 30,
};

console.log(count(user)); 

function count(user) {
	return Object.keys(user).length;
}
