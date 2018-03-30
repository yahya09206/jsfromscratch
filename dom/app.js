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
-access the dom using query selector which is either an ID or Class. Use textContent to change content of score
	•document.querySelector('#current-' + activePlayer).textContent = dice;
- Read element from webpage
	•var x = document.querySelector('#score-0').textContent;
		console.log(x);
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
- Remove/Add class to elements
	• document.querySelector('.player-0-panel').classList.remove('active');
	• document.querySelector('.player-1-panel').classList.add('active');
*/



//create variables for the game
var scores, roundScore, activePlayer, dice;
//give variables their value
scores = [0,0];
roundScore = 0;
activePlayer = 0;
//Can use querySelector to change css. Set display to none
document.querySelector('.dice').style.display = 'none';

//get element by ID name. Which is faster than query selector. Set all scores to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//select button to roll the dice. 
document.querySelector('.btn-roll').addEventListener('click', function() {
	//1, Random number
	//generate random number for dice roll 1-6 all real numbers using variable
	var dice = Math.floor(Math.random() * 6) + 1;
	// 2. Display correct dice number result
	//create variable for selecting query to make it easier
	var diceDOM = document.querySelector('.dice');
	//add it to change the style of the dice to display
	diceDOM.style.display = 'block';
	//change image to match the dice roll
	diceDOM.src = 'dice-' + dice + '.png';
	// 3. Update round score IF the rolled number was NOT a 1
	//use if statement to determine score based on dice roll
	//if roll is >1 then add score to users points
	if (dice !== 1) {
		//add dice result to round score
		roundScore += dice;
		//display in user interface
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}else{
		//next player turn
		nextPlayer();
	}
});

//Set up event listener for holding players score
document.querySelector('.btn-hold').addEventListener('click', function(){
	//add current score to players global score when player clicks hold button
	scores[activePlayer] += roundScore;
	//update UI for active player
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	//check if player won the game
	if(scores[activePlayer] >= 20){
		//chenge css of active player name to winner
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		//set display of dice back to none
		document.querySelector('.dice').style.display = 'none';
		//toggle winner
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		//remove active class from player
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

	}else{
		nextPlayer();
	}
});

//function for determining next player
function nextPlayer(){
//next player turn
	//use ternary operator to switch from active player to other player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	//set roundscore back to 0
	roundScore = 0;
	//set user score to 0 inside of user interface for both players
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	//switch active player class from one user to another by toggling
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	//remove dice from screen
	document.querySelector('.dice').style.display = 'none';
}
