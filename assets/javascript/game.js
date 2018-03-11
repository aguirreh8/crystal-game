// Create global variables
let currentNum = 0;
let currentScore = 0;
let redVal = 0;
let blueVal = 0;
let greenVal = 0;
let yellowVal = 0;
let wins = 0;
let losses = 0;

// Run game initiation, reset scores and goal value
function initializeGame() {
	currentScore = 0;
	$('#current').html(currentScore);
	pickNum();
	setCrystalVal();
}

// Set goal value at random from 19 to 120
function pickNum() {
	currentNum = Math.floor((Math.random() * 101) + 20);
	$('#goal').html(currentNum);
}

// Set value to increase with for each element at random from 1 to 12
function setCrystalVal() {
	redVal = Math.floor((Math.random() * 12) + 1);
	blueVal = Math.floor((Math.random() * 12) + 1);
	greenVal = Math.floor((Math.random() * 12) + 1);
	yellowVal = Math.floor((Math.random() * 12) +1);
	// console.log('red:' + redVal + ' blue:' + blueVal + ' green:' + greenVal + ' yellow:' + yellowVal);
}

// Check current score compared to total score
function scoreChecker() {
	//If user's score matches goal, add 1 to wins, display it on dom, reset game
	if (currentScore === currentNum) {
		wins++;
		alert("You win!");
		$('#wins').html(wins);
		initializeGame();
	}
	// if user's score is greater than goal, add 1 to losses, display it on dom, reset game 
	else if (currentScore > currentNum) {
		losses++;
		alert('You loose..');
		$('#losses').html(losses);
		initializeGame();
	} 
	// else continue current game
	else {
		return;
	}
}

// Run when document has finished loading
$(document).ready(function() {
	initializeGame();
	// Add value of each element to current user's score when clicked
	$('#red').on('click', function() {
		currentScore = currentScore + redVal;
		$('#current').html(currentScore);
		scoreChecker();
	})

	$('#blue').on('click', function() {
		currentScore = currentScore + blueVal;
		$('#current').html(currentScore);
		scoreChecker();
	})

	$('#green').on('click', function() {
		currentScore = currentScore + greenVal;
		$('#current').html(currentScore);
		scoreChecker();
	})

	$('#yellow').on('click', function() {
		currentScore = currentScore + yellowVal;
		$('#current').html(currentScore);
		scoreChecker();
	})

});