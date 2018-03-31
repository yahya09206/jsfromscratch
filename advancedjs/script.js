/* ---------------------------------------------- 
					OBJECTS
---------------------------------------------- */
/*
- Everything is an object
	• Arrays, Functions, Objects, Dates, Wrappers for numbers, strings and booleans.
- Not just for storing data
- OOP
	• Objects interact with one another through methods and properties
	• Used to store data, structure applications into modules and keeping code clean
- Object constructor is the blueprint and is used to create instances to create something from the object
- Inheritance
	• When one object gets access to another object's properties
	• is made possible through prototyping
		• each and every object in javascript has a prototype property
- The constructors prototype property is not the prototype of the constructor itself, its the prototype 
	of all instances that are created through it
- New operator
	• empty object is created
	• constructor function is called with the arguments specified
*/

//below is how to create using an object literal
var john = {
	name: 'john',
	yearOfBirth: '1991',
	job: 'developer'
};
//build object using function constructor
var Person = function(name, yearOfBirth, job){
	this.name = name,
	this.yearOfBirth = yearOfBirth,
	this.job = job
}
//inherit property
Person.prototype.lastName = 'Smith';
//prototype inheritance
Person.prototype.calculateAge = function(){
	console.log(2018 - this.yearOfBirth);
}
//instantiate new object
var john = new Person('John', 1991, 'Developer');
var jane = new Person('Jane', 1995, 'Designer');
var mark = new Person('Mark', 2001, 'Developer');
//call methods
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
//log new lastname
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

//Creating objects using object.create method
var personProto = {
	calculateAge: function(){
		console.log(2016 - this.yearOfBirth);
	}
};
//create john object the inefficient way
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1991;
john.job = 'teacher';

var jane = Object.create(personProto, {
	name: {value: 'Jane'},
	yearOfBirth: {value: 1991},
	job: {value: 'Designer'}
});




/* ---------------------------------------------- 
			FIRST CLASS FUNCTIONS
---------------------------------------------- */
/*
- A function is an isntance of the object type
- A function behaves like any other object
- Can store functions in a variable
- Can pass a function as an argument to another function
- Can return a function from a function
*/
//array with years in them
var years = [1990, 1965, 1937, 1991, 2018];

//function that will recieve an array and return a new result array
function arrayCalc(arr, fn){
	//create empty array
	var arrResult = [];
	//loop over arrays
	for (var i = 0; i < arr.length; i++) {
		//push result into empty array
		arrResult.push(fn(arr[i]));
	}
	//return the result array
	return arrResult;
}
//function to calculate age
function calculateAge(el){
	return 2018 - el;
}
//function to determine if someone is of full age
function isFullAge(el){
	return el >= 18;
}
//function to calc heart rate based on age
function maxHeartRate(el){
	//conditional 
	if(el >= 18 && el <= 81){
		//return whole number
		return Math.round(206.9 - (0.67 * el));
	}else{
		return -1;
	}
}
//call function that calculates age
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
console.log(fullAges);
console.log(ages);

/* ---------------------------------------------- 
			FUNCTIONS RETURNING FUNCTIONS
---------------------------------------------- */
function interviewQuestion(job){
	if(job === 'designer'){
		return function(name){
			console.log(name + ', can you please explain what UX design is?');
		}
	}else if(job === 'teacher'){
		return function(name){
			console.log('What subject do you teach, ' + name + '?');
		}
	}else{
		return function(name){
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

/* ---------------------------------------------- 
			IIFE
---------------------------------------------- */
/*
*/
function game(){
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();
 (function(){
 	var score = Math.random() * 10;
 	console.log(score >= 5);
 })();

/* ---------------------------------------------- 
				CLOSURES
---------------------------------------------- */
/*
- Inner function always has access to outer function even after outer function has returned.
*/
function retirement(retirementAge){
	var a = ' years left until retirement.';
	return function(yearOfBirth){
		var age = 2018 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}
var retirementUS = retirement(66);
retirementUS(1991);

/* ---------------------------------------------- 
			BIND CALL AND APPLY
---------------------------------------------- */
/*
- Allow you to call a function and set 'this' variable manually
*/
var john = {
	name: 'john',
	age: 27,
	job: 'teacher',
	presentation: function(style, timeOfDay){
		if(style === 'formal'){
			console.log('Good' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age);
		}else if(style === 'friendly'){
			console.log('Hey! What\'s up? I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' have a nice ' + this.timeOfDay);
		}
	}
}

var emily = {
	name: 'Emily',
	age: 35,
	job: 'Designer'
};
//call function for john
john.presentation('formal', 'morning');
//borrow method for emily object from john's method aka call method
john.presentation.call(emily, 'friendly', 'afternoon');
//apply method which accepts the params as arrays
// john.presentation.apply(emily, ['friendly', 'afternoon']);
//bind method also allows you to set 'this' explicitly. generates copy of method
var jobFriendly = john.presentation.bind(john, 'friendly');
//set second argument seperatly
jobFriendly('evening');


