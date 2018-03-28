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
var now = 2016;
var birthYear = now - 26;
//mutate birthyear
birthYear = now - 26 * 2;
console.log(birthYear);


/* ---------------------------------------------- 
				IF/ELSE & SWITCH
---------------------------------------------- */
/*
- Type of constrol structure
- Controls the flow of your program
- '===' strict comparison operator
- '==' does type coercion
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
