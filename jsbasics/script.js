/* ---------------------------------------------- 
		VARIABLES AND DATA TYPES
---------------------------------------------- */
/*
- Variable is like a container in which we can store a valuable that can be used over and over again
- There are 5 primitive data types(not objects)
1. number: floating point numbers, for decimals and integers.
2. string: sequence of characters, used for text.
3. boolean: logical datatype like true or false.
4. undefined: datatype that doesn't have a value yet.
5. null: non existent at all.
*/

//declare variable
var name = 'john'; //john is a string data type because it is a word
//write to console
console.log(name); //use the name of the variable inside the parentheses 
//declare a integer variable
var age = 27; //age is the integer data type
console.log(age);
//boolean datatype
var fullAge = true; //true is the boolean datatype
console.log(fullAge);


/* ---------------------------------------------- 
	VARIABLE MUTATATION AND TYPE COERCEION
---------------------------------------------- */
/*
- Type coercion is when javascript automatically converts two different datatypes into one based on which variable it has to convert
- Can declare variable and not define its value immediately
- Can declare more than one variable on a single line
- Changine value of variable is called variable mutation. Don't have to use 'var' keyword again.
*/

var name = 'john';
var age = 26;
console.log(name + age); //using the '+' sign will combine the variables aka concatenation

//declare multiple variables on one line and declare their values on seperate line
var job, isMarried;
//log variable that has no value will return 'undefined'
console.log(job);

//assign values to variables
job = 'teacher';
isMarried = false;
//log complete sentence with values given
console.log(name + ' is a ' + age + ' year old ' + job + ' .Is he married? ' + isMarried + '.');

//change value of variables declared above aka mutation
age = 'thirty six';
job = 'driver'
//log complete sentence with new values given
console.log(name + ' is a ' + age + ' year old ' + job + ' .Is he married? ' + isMarried + '.');


/* ---------------------------------------------- 
				PROMPT
---------------------------------------------- */
//Get data from console using prompt command and log it to console
//var lastName = prompt('What is the last name?');
//console.log(lastName);


/* ---------------------------------------------- 
				OPERATORS
---------------------------------------------- */
/*
- Operators are used to make calculations
- Precedence of operators still applies in javascript just like in regular math
*/

//calculate birthyear
var now = 2017;
var birthYear = now - 26;
//mutate birthyear
birthYear = now - 26 * 2;
console.log(birthYear);


/* ---------------------------------------------- 
				IF/ELSE
---------------------------------------------- */
/*
- Type of constrol structure
- Controls the flow of your program
- '===' strict comparison operator
- '==' does type coercion
- Tests to see whether a certain statement is true or false to determine what to do next in the program
*/

//create variables
var name = 'John';
var age = 26;
var isMarried = 'yes';

//if else statement
if (isMarried === 'yes') {
	console.log(name + ' is married');
}else{
	//this statement will run because the above statemnt is false unless switched around
	console.log(name + ' will hopefully marry soon');
}

 //changed ismarried status to boolean
 isMarried = false;
 if(isMarried){
 	console.log('YES!');
 }else{
 	console.log('NO!');
 }

/* ---------------------------------------------- 
				BOOLEAN LOGIC & SWITCH
---------------------------------------------- */
/*
- <> is a logic statement used within the if/else condition
- boolean logic consists of && & || operators. Deals with true/false values
- Examples of boolean logic outcomes
	• AND(&&) => true if ALL are true
	• OR(||) => true if ONE is true
	• NOT(!) => inverts true/false value
- switch statement makes checking different cases easier and shorter
*/

//nested if/else statement
var age = 25;
if(age < 20){
	console.log('John is a teenager');
	}else if(age > 20 && age < 30){
		console.log('John is a young man');
	}else{
		console.log('John is a man');
}

//switch statement
var job = 'teacher';
//prompt user for job
// job = prompt('What does john do?');
switch(job){
	case 'teacher':
		console.log('John teaches kids');
		break;
	case 'driver':
		console.log('John drives a cab in yonkers');
		break;
	case 'cop':
		console.log('John helps fight crime.');
		break;
	default:
		console.log('John does something else.');
}

/* ---------------------------------------------- 
		FUNCTIONS/EXPRESSIONS/STATEMENTS
---------------------------------------------- */
/*
- Functions make code reusable resulting in cleaner code and avoiding repeition of code
- A formula that is used multiple times across multiple lines can be compacted into a function
-Function Skeleton
	• function name of function(parameter){
		write code here;
		return statement;
	  }
	  call function
	  functionname();
	 •Statement just performs an action.
-Functions can call other functions
-Function expression skeleton
	•var somefun = function(par){
		//code
	}
	•Produces a value.

*/

//function statement
function calculateAge(yearOfBirth){
	var age = 2017 - yearOfBirth;
	return age;
}
//call function with year of birth inside parentheses aka parameter
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1995);
var ageMary = calculateAge(2009);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

//Years until retirement function, can use multiple parameters
function yearsUntilRetirement(name, year){
	var age = calculateAge(year);
	//calculate reitrement age
	var retirement = 65 - age;
	if(retirement >= 0){
		console.log(name + ' retires' + ' in ' + retirement + ' years.');
	}else{
		console.log(name + ' is already retired.');
	}
}
yearsUntilRetirement('John', 1990);
yearsUntilRetirement('John', 1945);
yearsUntilRetirement('John', 1967);


/* ---------------------------------------------- 
					ARRAY
---------------------------------------------- */
/*
- Arrays act like a list to make things easier to go through
- Zero index meaning it starts at 0,1,2,3...
- Has built in functions that let you do different things with an array
*/

//Construct an array of names bracket
var names = ['John', 'Jane', 'Mark'];

//construct array using 'new' keyword
var years = new Array(1990, 1969, 1948);

//log array to console
console.log(names);
//print array with a specific item chosen
console.log(names[2]);
//mutate array from position you choose
names[1] = 'Ben';
console.log(names);

//mix data types within a single array
var john = ['John', 'Smith', 1990, 'designer', false];

//function to add an element to end of array
john.push('blue');
//add element to beginning of array
john.unshift('Mr.');
//remove element from end of array and return the removed value. No value needed
john.pop();
//remove element from beginning of array
john.shift();
console.log(john);
//function that returns the position element that you choose. Used to find out if certain element is inside of array
// alert(john.indexOf('Smith'));

//find out if john is a teacher
if(john.indexOf('teacher') === -1){
	console.log('John is NOT a teacher.');
}

/* ---------------------------------------------- 
				OBJECTS AND PROPERTIES
---------------------------------------------- */
/*
- Allow you to group variables using key,value pairs
- Retrieve elements but calling object name followed by '.' and the key that you want to use. This is also called 'dot' notation
	• Use: john.keyName;
- Another way is to use '[]' which is called bracket notation. Use: john['keyName'];
*/

//declare object using object notation
var john = {
	//key  value
	name: 'john',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};
//write object to console using dot notation
console.log(john.lastName);
//write object to console using bracket notation
console.log(john['lastName']);

//variable that has name of key we want to use
var xyz = 'job';
console.log(john[xyz]);

//data mutation on objects is the same for arrays and objects
//change johns last name
john.lastName = 'Miller';
john['job'] = 'programmer';
console.log(john);

//object use initialization with new keyword
var jane = new Object();
jane.name = 'jane';
jane.lastName = 'smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane.isMarried = true;
console.log(jane);

/* ---------------------------------------------- 
				OBJECTS AND METHODS
---------------------------------------------- */
/*
- Can use methods aka functions inside of objects
- Call those methods the same way as you would a regular key 
- 'this' refers to the object and then you can use whatever notation to for the value you want
*/

/* v1
var john = {
	//key  value
	name: 'john',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(){
		//return difference between 2017 - yearofbirth using 'this keyword'
		return 2017 - this.yearOfBirth;
	}
};
console.log(john.family[2]);
//call function
// console.log(john.calculateAge(1970));
console.log(john.calculateAge());
var age = john.calculateAge();
john.age = age;
console.log(john);
*/


//v2 will automatically store result inside of object
var john = {
	//key  value
	name: 'john',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(){
		//return difference between 2017 - yearofbirth using 'this keyword'
		//return 2017 - this.yearOfBirth;
		//store age inside of john object
		this.age = 2017 - this.yearOfBirth;
	}
};
//calculate age based on year of birth
john.calculateAge();
console.log(john);


/* ---------------------------------------------- 
				LOOPS AND ITERATION
---------------------------------------------- */
/*
- Another type of control structure
- Useful for repetitive tasks and for large numbers of items to go through
	• i.e if you want to count to ten without hardcoding each individual number
- For loop
	• for(initialize; comparasion; iteration){do something}
	• 0, true, print 0, update i to 1
	• starts at 0
- 'length' property will tell you how long the array is
-While Loop is another way of counting items
	• while condition is true, execute code inside of while loop
-'break;' will exit the loop for you. Works with all types of loops
*/

//for loop that counts to ten
for(var i = 0; i <= 10; i++){
	console.log(i);
}

//create array and loop through it
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
for(var i = 0; i < names.length; i++){
	console.log(names[i]);
}

//count loop backwards
for(var i = names.length - 1; i >= 0; i--){
	console.log(names[i]);
}

//simple while loop
var i = 0;
while(i < names.length){
	console.log(names[i]);
	i++;
}
