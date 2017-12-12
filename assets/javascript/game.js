let currentNum = 0;
let currentScore = 0;
let redVal = 0;
let blueVal = 0;
let greenVal = 0;
let yellowVal = 0;
let wins = 0;
let losses = 0;

function initializeGame() {
	currentNum = 0;
	$('#current').html = currentNum;
	pickNum();
	setCrystalVal();
}

function pickNum() {
	currentNum = Math.floor((Math.random() * 101) + 20);
	$('#goal').html(currentNum);
}

function setCrystalVal() {
	redVal = Math.floor((Math.random() * 12) + 1);
	blueVal = Math.floor((Math.random() * 12) + 1);
	greenVal = Math.floor((Math.random() * 12) + 1);
	yellowVal = Math.floor((Math.random() * 12) +1);
}

function gameChecker() {
	if (currentScore === currentNum) {
		wins++;

	}
}

$(document).ready(function() {
	initializeGame();

	$('#red').on('click', function() {
		currentScore = currentScore + redVal;
		$('#current').html(currentScore);
	})

	$('#blue').on('click', function() {
		currentScore = currentScore + blueVal;
		$('#current').html(currentScore);
	})

	$('#green').on('click', function() {
		currentScore = currentScore + greenVal;
		$('#current').html(currentScore);
	})

	$('#yellow').on('click', function() {
		currentScore = currentScore + yellowVal;
		$('#current').html(currentScore);
	})

});