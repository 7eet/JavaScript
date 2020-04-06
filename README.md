# JavaScript Learning

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

## Garbage Collector
  [garbage collector](https://javascript.info/garbage-collection)

## 'this' keyword
  _Method can reference the object using _`this`.<br>
  _The value of this is defined at run-time._<br>

  ```
	let user = {
		name: "Alice",
		age: 23,
		sayHi() {
			console.log("Hello " + this.name");
		}
	};

	user.sayHi();    // Hello Alice
  ```
## Strings
  _Strings can't be changed in JavaScript. String are immutable like Java._

  1. **length**
    ```
	console.log(`MyString`.length);  //8
    ```
  2. **charAt(pos)**

    _to access a character at position pos. We can use square brackets [pos] or charAt(pos) method._
    ```
        let str = "JavaScript";

        console.log(str[0]);    // J
        console.log(str.charAt(0));    // J

        // to access the last character
        console.log(str[str.lenght - 1]);    // t
    ```

    _If the position input is greater than the length of string then_ `[]` _return_ `undefined` _while_ `charAt(pos)` _return empty string_ `''`

  3. **iterate over characters**
    _using_ `for..of`
 
    ```
        > for (let ch of "JavaScript") {
        ...   console.log(ch);
        ... }
        J
        a
        v
        a
        S
        c
        r
        i
        p
        t
    ```
  4. **Change the case**
    _using_ `toLowerCase()` _&_ `toUpperCase()`
 
    ```
        console.log("case".toUpperCase());    // CASE
    
        console.log("CasE".toLowerCase());    // case
    ```
  5. **Searching in a string**
  
   - **indexOf**
      _method_ `indexOf(subString, pos)` _looks subString in a String starting from given position._<br>
      _It return positive where the match was found or -1 if nothing was found._<br>
  
      ```
         let str = "JavaScript";
    
         str.indexOf("Java");    // 0, because it's at the begining.
         str.indexOf("Script");    // 4, it starts from index 4.
      ```
   - **lastIndexOf**
      _same as above but it searches substring from end to its begining.._
  
      ```
         let str = "learning"; 
     
         str.lastIndexOf("n");   // 6 
     
         str.indexOf("n");    // 4
      ```
   - **includes**
     _includes(sub, pos) return true/fasle depending upon string contains sub._
  
      ```
         let str = "JavaScript is Fun";
     
         str.includes("is");    // true
     
         str.includes("i",20)  // false , because it does not contains "i" after position 20.
      ```
   - **startsWith and endsWith**
      ```
         "JavaScript is Fun".startsWith("Java");    // true
    
         "JavaScript is Fun".endsWith("Fun");    // true
      ```
 
   - **slice**
     `slice(start [,end])` _returns the part of string from start to (not including) end._<br>

      ```
         let str = "JavaScript";
         console.log(str.slice(0,4));  // 'Java'

         console.log(str.slice(4));   // 'Script'
      ```
 
   - **substr**
     `substr(start [, lenght])` _return the part of string from start with given_ `length`.
  
      ```
         let str = "JavaScript";

         console.log(str.substr(2,2));  // 'va',  it starts at index 2 and end at position 4(excluding)
      ```

## Array
  _Data structure used to store ordered collections._<br>
 
### Declaration
  ```
      let arr = new Array();

      let arr = [];

      let languages = ["Go", "Java", "C++", "JavaScript", "Python"];
  ```

### To access an element
  _used index to access particular element. Arrays start with index 0._

  ```
      let languages = ["Go", "JavaScript", "Dart"];

      console.log(languages[0]);  // Go
  
      console.log(languages[2]);  // Dart
  ```

### Replace element
    ```
        languages[0] = "Python";

        console.log(languages);  // [ 'Python', 'JavaScript', 'Dart' ]
    ```
    
### Methods
  - **push**
    _appends an element to the end._<br>
    `return` _the new length of array_
    
    ```
       let numerics = [1, 2, 3, 4];
       
       let position = numerics.push(0);   // 5
       
       console.log(numerics);  // [ 1, 2, 3, 4, 0 ]
    ```
  - **pop**
    _remove the last element of array and returns it._
    
    ```
       console.log(numerics.pop());   // 0, because the last element is 0
    ```
    
  - **shift**
    _removes the first element of array and returns it._
    
    ```
       console.log(numerics);   //  [ 1, 2, 3, 4]
       
       console.log(numerics.shift());  // 1
       
    ```
    
  - **unshift**
    _add the element to the beginning of the array._<br>
    `return` _the new length of array._ 
    
    ```
       console.log(numerics);  // [ 2, 3, 4 ]
       
       numerics.unshift(1);
       
       console.log(numerics);   //  [ 1, 2, 3, 4]
       
    ```
  - **slice**
    `slice(start, [end])`<br>
    _it returns a new array copying all items from start to end(not including)._<br>
    ```
        let arr = ["A", "B", "C", "D"];

	let sub = arr.slice(1,3);

	console.log(sub);  // ['B', 'C']

        let endingTwo = arr.slice(-2);
     
	console.log(endingTwo);  // ['C', 'D']
    ```
  
  - **concat**
    `concat(arg1, arg2, ..., argN)`<br>
    _it creates a new array includes other array and additional items._<br>
    ```
     let arr = [1, 2];

     let newArr = arr.concat(3,4);

     console.log(newArr);  // [ 1, 2, 3, 4]

     let twoArrayConcat = arr.concat([5,6],[7,8]);

     console.log(twoArrayConcat);  // [ 1, 2, 5, 6, 7, 8]
    ```

  - **forEach**
    `forEach(function(item, index, array) {
       // do something
     }`

    ```
      let arr = ["a", "b", "c", "d"];
      
      arr.forEach((item, index, array) => {
           console.log(`${item} is at index ${index} in [ ${array} ]`);
      });

     ```
