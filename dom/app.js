/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/* ---------------------------------------------- 
				DOM
---------------------------------------------- */
/*
- Document object model
- Structured representation of an html document
- Used to connect webpages to scripts like javascript
- Fully object oriented
- Make your pages interactive by maniupulating the dom
- Change value of html inside of current score to italic
	•document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
- Read element from webpage
	•var x = document.querySelector('#score-0').textContent;
		console.log(x);
- Can use querySelector to change css. Set display to none
	•document.querySelector('.dice').style.display = 'none';
*/

/* ---------------------------------------------- 
				EVENTS
---------------------------------------------- */
/*
- Notifications that are sent to notify the code that something happened on the webpage
	*for example clicking a button, resizzing a window, scolling down or pressing a key
- Event listeners are functions that perform actions based on a certain event based on the execution stack
- eventListener accepts two arguments:
	•The type of event and the function to call as soon as the event is called
- A callback function is called by another function and not by the user
- Anonymous function is a function that doesnt have a name and cant be reused
*/



//create variables for the game
var scores, roundScore, activePlayer, dice;
//give variables their value
scores = [0,0];
roundScore = 0;
activePlayer = 1;
console.log(dice);
//access the dom using query selector which is either an ID or Class. Use textContent to change content of score
document.querySelector('#current-' + activePlayer).textContent = dice;
//select button to roll the dice. 
document.querySelector('.button-roll').addEventListener('click', function() {
	//1, Random number
	//generate random number for dice roll 1-6 all real numbers using variable
	var dice = Math.floor(Math.random() * 6) + 1;
	// 2. Display result

	// 3. Update round score IF the rolled number was not a 1

});
