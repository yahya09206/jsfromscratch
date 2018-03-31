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
//instanciate new object
var john = new Person('John', 1991, 'Developer');
