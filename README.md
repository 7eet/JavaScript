# Topics

## Hello World <br>
   _It display "hello world" message with alert function._

## Variables<br>
   _Variables are named space loaction to store data. You can store any types of data._

## Data Types<br>
- **String** - _In JS string may contain one or more character._ 
- **Number** - _It contains all of these -> int, float and double._
- **Boolean** - _true or false._
- **null** - _special type means nothing or empty._
- **undefined** - _It means the value is not assigned. If a variable is declared, but not assigned any value, then its value is_ **undefined**.

## Operators <br>
- **Unary** - _It has only one oprand. Like v++_
- **Binary** - _It has two operand. Like 5 + 3_
- **Arithematic** - _( +, -, *, /, %, \*\*)_
## Interactions<br>
- **alert** - _It shows the alert message in a mini-window_ <br>
	```
	> alert("JS");
	```

- **confirm** - _It pop a new confirmation window having only two buttons "cancel" and "ok"._<br>
	```
	> confirm("Question?");
	```

- **prompt** - _It displays a text and textbox in a mini-window. User enter text in that textbox._<br>
	```
	> prompt("Enter number");
	```

## Conditional Statements<br>
- **if...else** - _if condition is true then enter into if's block otherwise enter into else's block._<br>
``` 
	if (condition) { 
		// statements to execute
	} else {
		// statements to excute
	}
```
- **switch** - _modified version of if statements. It replace multiple if checks._ <br>
```
	switch(value) {
		case 'value 1' :
			// statements;
			break;
		case 'value 2' :
			// statements;
			break;
		case 'value n' :
			// statements;
			break;
		default :
			// statements;
			break;
	}
```
## Loop - _a way to repeat the tasks number of times._<br>
- **While** <br>
	```
		while(condition) {
			// statements
		}
	``` 

- **do..while** <br>
	```
		do {
			// this statement execute at least once 
		} while (condition);
	 ```

- **for(begin; condition; increment)** <br>
	```
		for ( let i = 0; i < 3; i++) {
			//statements  
			console.log(i);
		}
	```
	_eg: print even numbers_
	```
		> for (let i = 0; i <= 10; i = i + 2) {
		... console.log(i);
		... }
		0
		2
		4
		6
		8
		10
	```

## Break & Continue <br>
- **break** - _It is used break or exit the loop._
- **continue** - _used to stop current iteration and start with new iteration._

	``` 
		for (let i = 1; i <= 3; i++) { 
			if (i == 2) { // when i equals to two, leave this 2 , start with 3
			continue;	
			}		
		console.log(i);    // it prints 1 3
		}
	```


## Functions 
_It is a block of one or multiple statements._ <br>
_Function name should be as accurate as possible and describe what the function does so that someone reading the code gets an indication of what the function does._<br>
_Here is how to declare the function_<br>

```
	function name_of_function(parameters) {
		// statements
	}
```
_eg:_<br>
```
	function greet() {
		alert("Hello!!!!");
	}
```

### Local Variable
_A variable declared inside a function. It is only accessible to that function's body only._<br>
_eg:_<br>
```
		function greet() {
			let message = "Hello!!!!"; // local variable
			alert( message );
		}
		greet(); // Hello!!!!
		alert( message );  // Error! message is not defined.
```

### Global or Outer Variable
_A variable is declared outside of function's body._ <br>
_eg:_<br>
```
		let userName = 'Alice';   // global variable
		function greet() {
			userName = "Bob"; // (1) changed the outer variable
			let message = 'Hello, ' + userName;
			alert(message);
		}
		alert( userName ); // Alice before the function call
		greet();
		alert( userName ); // Bob, the value was modified by the function
```

### Parameters
_We can pass data to a function using parameters. It is also called as_ **function arguments**.<br>
_Values passed to a function as parameters are copied to its local variables._<br>
_eg:_<br>
```
		function greet(to, msg) { // arguments: to, msg	
			alert(to + ': ' + msg);
		}
		greet('Alice','Hello');
```

### Returning a value
_A function a return value._<br>
_eg:_<br>
```
		function add(a,b) {
			return a + b;
		}
		let result = add(2,1);
		alert(result);	// display 3
```
_A empty return is same as undefined_.<br>
```
		function something() {  // some-statements; }
		function nothing() {  return; }
		
		alert( something() === undefined ); // true
		alert( nothing() === undefined ); // true
```

### Function Declaration & Function Expression
_If the function is declared as a separate statement in the main code then it is_ **Function Declaration**.<br>
```
	function hello() {
		alert("Hello");
	}
```
_If the function is created as a part of an expression, it’s called a_ **Function Expression**.
```
	let hello = function() {
		alert("Hello");
	};
	
	hello();
```
**Function Declarations are processed before the code block is executed.**<br>
**Function Expressions are created when the execution flow reaches them.**

### Arrow Function
_It is a similar synatx of Java's lambda functions._<br>
_syntax:_
```
	let func = (a,b,c, ...n) => expression;
```
   **or**
```
	let func = (a,b,c, ...n) => {
		//body
	};
```
_The func accepts a,b,c, ...n arguments and evalutes expression on the right side._<br>
_eg:_
```
	let sum = (a,b) => a+b;

	alert(sum(5,5));   // gives 10
```
_for one argument there is no need to place parenthesis_
```
	let square = i => i * i;

	alert(square(5));  // gives 25
```
_For zero argument there should be empty parentheses_
```
	let greet = () => alert("hello");
	greet();
```

## Debugging
_Debugging is used to find or fix the errors in the code._ <br>
[Detailed Info](https://javascript.info/debugging-chrome)


## Objects
_It a data type which stores the collections of various data._<br>
_example: The car object contains properties like color, doors, isElectric, etc._<br>
_In JS a property has a key before the colon ":" and a value to the right._<br>

### empty object
```
	let user = {};
```
  **or**
```
	let user = new Object();
```

### Object with two properties
```
	let user = {
		name: "Steve",
		age: 20,
	};
```

### Add new property after creating a object
```
	user.gender = 'Male';
	
	let aNewKey = "fav language";       // Note: do not use a value which contains a whitespace
					   // use underscore "_" 
					  // example: let aNewKey = "fav_language";

	user[aNewKey] = "Go";       // same as   user["fav language"] = "Go";
```


### To remove a property
```
	delete user.gender;
```

### Access data from object
```
	console.log(user.name);   // gives Steve

	console.log(user["fav language"])   // gives Go
```

### check the existence of a property in object
```
	console.log("age" in user);   // true because, user.age exists

	console.log("noKey" in user);    // false because, user.noKey does not exists
```

### for...in loop
_To walk over all keys of an object_<br>
```
	for (key in object) {
		//body;
	}
```

```
	let user = {
		name: "Bob",
		age: 20,
	};

	for (let key in user) {
		console.log(key);    // prints the key only like name,age
	
		console.log(user[key]);    // prints the value  Bob, 20
	}
```

### Comparison by reference
_Two objects are equal only if they are the same object._

```
	let one = {};
	let two = one;

	console.log(one == two);   // true, because both variables reference the same object
```

```
	let one = {};
	let two = {};

	console.log(one == two);   // false, because they are two independent objects
```


