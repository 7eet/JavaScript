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

## Break & Continue <br>
- **break** - _It is used break or exit the loop._
- **continue** - _used to stop current iteration and start with new iteration._

``` 
	for (let i = 1; i <= 3; i++) { 

		if (i == 2) { // when i equals to two, leave this 2 , start with 3

			continue;	

		}		

		console.log(i); 
	
	}
```

_above block print 1 3_


