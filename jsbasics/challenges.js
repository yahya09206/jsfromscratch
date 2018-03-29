/* ---------------------------------------------- 
				CODING CHALLENGES
---------------------------------------------- */

/*CHALLENGE 1 */
var johnHeight = 147;
var friendHeight = 157;
var johnAge = 25;
var friendAge = 30;

var johnScore = johnHeight + 5 * johnAge;
var friendScore = friendHeight + 5 * friendAge;

if (johnScore > friendScore) {
	console.log('John wins the game! with a score of: ' + johnScore);
}else if(friendScore > johnScore){
	console.log('Friend wins the game! with a score of: ' + friendScore);
}else{
	console.log('Game ends in a draw!');
}

/*CHALLENGE 2 */
var years = [1990, 2000, 2005, 1991];
var ages = [];

for(i = 0; i < years.length; i++){
	ages[i] = 2017 - years[i];
}

for(var i = 0; i < ages.length; i++){
	if(ages[i] >= 18){
		console.log('Person is ' + ages[i] + ' years old, and is of full age');
	}else{
		console.log('Person is ' + ages[i] + ' years old, and is not of full age');
	}
}
