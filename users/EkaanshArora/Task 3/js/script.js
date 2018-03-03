var questions = [{
    question: "What's your favourite genre?",
    choices: ["Rock", "Alternative", "Metal", "Rap"]
}, {
    question: "What's your favourite band?",
    choices: ["Green Day", "Imagine Dragons", "Metallica", "Twenty One Pilots"]
}, {
    question: "What's your favourite artist?",
    choices: ["Eric Clapton", "Ed Sheeran", "Jimi Hendrix", "Eminem"]
}, {
    question: "What's your favourite color?",
    choices: ["Red/Orange", "Teal/Blue", "Black/Grey", "Yellow/Green"]
}, {
    question: "What's your favourite album?",
    choices: ["The Wall", "Thriller", "Back in Black", "Damn."]
}];

var currentQuestion = 0;
var ansr = [0, 0, 0, 0];
var outputz = 0;
var quizOver = false;
var maxValue = 9;

$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {
            value = $("input[type='radio']:checked").val();
            if (value == 0) {
                ansr[0]++;
                console.log('0');
            }
            if (value == 1) {
                ansr[1]++;
                console.log('1');
            }
            if (value == 2) {
                ansr[2]++;
                console.log('2');
            }
            if (value == 3) {
                ansr[3]++;
                console.log('3');
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                displayCurrentQuestion();
            } else {
                displayScore();
                quizOver = true;
            }
        }
    });
});

function displayCurrentQuestion() {
    console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    var qnotxt=currentQuestion+1;
    $(document).find(".quizContainer > .qno").text('Q'+qnotxt);
    $(questionClass).text(question);
    $(choiceList).find("li").remove();
    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}
function displayScore() {
    var winner = '';
    maxValue = Math.max.apply(Math, ansr);
    isInArray = $.inArray(maxValue, ansr);
    console.log(isInArray);
    if (isInArray === 0) {
        winner = 'Radiohead/Foo Fighters';
    }
    else if (isInArray === 1) {
        winner = 'BØRNS/Arctic Monkeys';
    }
    else if (isInArray === 2) {
        winner = 'Alterbridge/Bring Me The Horizon';
    }
    else if (isInArray === 3) {
        winner = 'Post Malone/Joji';
    }
    $(document).find(".quizContainer > .question").text("You would probably like " + winner + ".");
    //$(document).find(".quizContainer > .result").show();
    $(document).find(".quizContainer > .choiceList").hide();
    $(document).find(".quizContainer > .btnholder").hide();
    $(document).find(".quizContainer > .qno").hide();
}
function hideScore() {
    $(document).find(".result").hide();
}