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
*/

//create variables for the game
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//generate random number for dice roll 1-6 all real numbers
Math.floor(Math.random() * 6) + 1