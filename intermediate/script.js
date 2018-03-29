/* ---------------------------------------------- 
				HOISTING
---------------------------------------------- */
/*
- Can call a function before it is executed
- It only works for function declarations & variables
*/

//function declaration
calculateAge(1965)
function calculateAge(year){
	console.log(2017 - year);
}

//function expression
var retirement = function(year){
	console.log(65 - (2016 - year));
}
retirement(1990);

//variable hoisting
console.log(age);
var age = 23;
console.log(age);

function foo(){
	console.log(age);
	var age = 65;
	console.log(age);
}
foo();
console.log(age);

/* ---------------------------------------------- 
			SCOPING AND SCOPE CHAIN
---------------------------------------------- */
/*
- Answers question of where can we access a certain variable?
- Each new function creates a scope
- Lexical scoping is where something is written in the code
*/

/* ---------------------------------------------- 
				THIS
---------------------------------------------- */
/*
- Refers to object as a whole
- Regular function call points to global object or window object === default
- Method call: points to object that is calling the method
- Not assigned a value until a function where it is defined is actually called
*/

//console log the window object from browser
// console.log(this);

calculateAge(1985);
function calculateAge(year){
	console.log(2016 - year);
	console.log(this);
}

var john = {
	name: 'John',
	yearOfBirth: 1990,
	calculateAge: function(){
		console.log(this);
	}
}
john.calculateAge();