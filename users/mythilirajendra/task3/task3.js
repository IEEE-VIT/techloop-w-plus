function check(){



	var question1 = document.quiz.question1.value;

	var question2 = document.quiz.question2.value;

	var question3 = document.quiz.question3.value;

	var question4 = document.quiz.question4.value;

	var question5 = document.quiz.question5.value;

	var question6 = document.quiz.question6.value;




	var correct = 0;





	if (question1 == "31") {

		correct++;

}

	if (question2 == "grave") {

		correct++;

}	

	if (question3 == "turnip") {

		correct++;

	}
	if (question4 == "stine") {

		correct++;

	}
	if (question5 == "yup") {

		correct++;

	}
	if (question6 == "sleepy") {

		correct++;

	}

	
	



	

	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];

	var messages = ["Wow!! I'm impressed","Great job!... But you could've done much better", "That's just okay", "You really need to do better"];

	var score;



	if (correct == 0) {

		score = 3;

	}



	if (correct > 0 && correct < 4) {

		score = 2;

	}



	if (correct >3 && correct <6) {

		score = 1;

	}

	if (correct == 6) {

		score = 0;

	}



	document.getElementById("after_submit").style.visibility = "visible";



	document.getElementById("message").innerHTML = messages[score];

	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

	document.getElementById("picture").src = pictures[score];

	}