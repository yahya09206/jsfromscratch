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