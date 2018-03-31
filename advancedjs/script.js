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
//call function that calculates age
var ages = arrayCalc(years, calculateAge);
console.log(ages);




