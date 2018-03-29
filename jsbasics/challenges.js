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