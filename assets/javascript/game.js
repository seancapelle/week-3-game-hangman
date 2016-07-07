var wins = 0;
var guessesLeft = 10;
var guessedLetters = [];
var dashedArray = [];
var wordBank = ["JEDI", "STORMTROOPER", "LIGHTSABER", "YODA", "TATOOINE", "SKYWALKER", "LIGHTSPEED"];
var wordSplit = wordBank[0];
var wordGuess = wordSplit.split("");
var guessCountRight = 0;

//Reset game
function gameReset(){

	//Shows wins
	document.querySelector('#wins').innerHTML = wins;
	
	//Use wordGuess to select a word
	wordGuess = wordBank[0];
	console.log(wordGuess + " !!!");
	// window.wordGuess = wordGuess;

	//Reset guessesLeft
	var guessesLeft = 10;
	document.querySelector('#guessesLeft').innerHTML = guessesLeft;

	//Reset guessedLetters
	guessedLetters.length = 0;
	document.querySelector('#guessedLetters').innerHTML = guessedLetters;

	//Zeroes out dashedArray
	dashedArray.length = 0;
	dashedLine(wordGuess);

	//Zeroes out guessCountRight
	guessCountRight = 0;
}

//Start game
gameReset();

//Display wordGuess as dashes
function dashedLine(wordGuess) {
	for(var i = 0; i < wordGuess.length; i++) {

		//Push out "_"
		dashedArray.push(" _ ");
		document.querySelector("#game").innerHTML = dashedArray.join(" ");
		}
}

//checkGuess function (LOOP IS ITERATING i TOO MUCH. EVEN CORRECTLY GUESSED LETTERS END UP IN "ELSE")
function checkGuess(userGuess){

 for (var i = 0; i < wordGuess.length; i++) {
 	
 		 if (userGuess.indexOf(wordGuess[i], 0) !== -1) {
 		 	//Replaces dash with correct letter
 		 	dashedArray.splice(i,1, userGuess);
 			document.querySelector("#game").innerHTML = dashedArray.join(" ");

 			//Adds one to guessCountRight
 			guessCountRight++;
 			guessRight(guessCountRight);
 		 	}

 		 else {
 		 	guessedLetters.push(" " + userGuess);
 		 	document.querySelector('#guessedLetters').innerHTML = guessedLetters;
 			
 		 	//Minus one guessesLeft (ITERATES FOR EACH INSTANCE OF i)
 			guessesLeft--;
 			guessWrong(guessesLeft);
 			document.querySelector('#guessesLeft').innerHTML = guessesLeft;
 			}
 		}
  }

//Checks if all letters in guessWord are guessed
function guessRight(guessCountRight) {
	if(guessCountRight == wordGuess.length){
		alert("You won!")
		
		//Add a win
		wins++;
		document.querySelector('#wins').innerHTML = wins;
		
		//Create a new guessWord
		nextWord();
	}
}

//guessWrong function (DOESN'T WORK BECAUSE i ITERATES TOO MUCH)
function guessWrong(guessesLeft) {
	// if(guessesLeft == 0) {
	// 	alert("Sorry, you lost.");
	// }
 }

//Makes a new guessWord
function nextWord(){
	//console.log ("in nextWord");
	wordBank.splice(0,1);
	gameReset();
}

//Capture key clicks
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(userGuess + "?");
	checkGuess(userGuess);
}



