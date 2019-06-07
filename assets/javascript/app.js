
var questionsArr = [
    {
        question: "Who won the 1999 NBA championship?",
        answerChoices: ["a. bulls", "b. knicks", "c. spurs", "d. lakers"],
        correctAnswer: "c. spurs"
    },
    {
        question: "Babe Ruth hit how many career homeruns?",
        answerChoices: ['a. 455','b. 843','c. 714','d. 507'],
        correctAnswer: "c. 714"
    },
    {
        question: "How many superbowls do the Patriots have?",
        answerChoices: ['a. 8','b. 15','c. 6','d. 3'],
        correctAnswer: "c. 6"
    },
    {
        question: "Who is the NFL's all time leading rusher?",
        answerChoices: ['a. Emmit Smith','b. Barry Sanders','c. Tony Dorsett','d. Frank Gore'],
        correctAnswer: "a. Emmit Smith"
    },
    {
        question: "Who has the most MVP awards in the history of the NBA?",
        answerChoices: ['a. Kareem Abdul-Jabbar','b. Michael Jordan','c. Kobe Bryant','d. Lebron James'],
        correctAnswer: "a. Kareem Abdul-Jabbar"
    },
    {
        question: "Who has thrown the most touchdown passes in NFL history?",
        answerChoices: ['a. Tom Brady','b. Drew Brees','c. Peyton Manning','d. Brett Favre'],
        correctAnswer: "c. Peyton Manning"
    },
    {
        question: "Which is the only country to have played in every World Cup?",
        answerChoices: ['a. Spain','b. Brazil','c. Germany','d. Mexico'],
        correctAnswer: "b. Brazil"
    },
    {
        question: "Name the only major team sport in the USA with no game clock?",
        answerChoices: ['a. Basketball','b. Hockey','c. Baseball','d. Soccer'],
        correctAnswer: "c. Baseball"
    },
    {
        question: "Who is the only coach to win both a NCAA and NBA championship?",
        answerChoices: ['a. Doc Rivers','b. Greg Popovich','c. Phil Jackson','d. Larry Brown'],
        correctAnswer: "d. Larry Brown"
    },
    {
        question: "What is the only city to win three major sports championships in the same year?",
        answerChoices: ['a. Chicago','b. Dallas','c. Detroit','d. New York'],
        correctAnswer: "c. Detroit"
    }
]

var timer = 45;
var clockRunning = false;
var correctAnswers = 0;
var wrongAnswers = 0;
var currentQuestionIndex = 0;

$("#question-wrapper").hide();

// Here are my click functions

$("#startButton").click(function(){
    $("#startButton").hide();
    // run the "display question" function
    displayQuestion ();
})

$(".correct-answer").click(function(){
    console.log("correct");
    stopTimer();
    correctAnswers++;
    // show the results screen
    showResultScreen();
})

$(".wrong-answer").click(function(){
    console.log("wrong")
    stopTimer();
    wrongAnswers++;
    showResultScreen();
    // show the results screen
})


// Here are all my functions
//  function that displays the question and answer choices for a particular index in questionsArr
function displayQuestion(){
    intervalId = setInterval(decrement, 1000);
    $("#question").text(questionsArr[currentQuestionIndex].question);
    $("#buttonOne").text(questionsArr[currentQuestionIndex].answerChoices[0]);
    $("#buttonTwo").text(questionsArr[currentQuestionIndex].answerChoices[1]);
    $("#buttonThree").text(questionsArr[currentQuestionIndex].answerChoices[2]);
    $("#buttonFour").text(questionsArr[currentQuestionIndex].answerChoices[3]);

    $(".question-wrapper").show();
    console.log(intervalId);
    gameover();
}

// "Show results screen" function
//  - once it's time to display the next question
//    - currentQuestionIndex++;
//    - run the display question function
function showResultScreen(){
    currentQuestionIndex++;
    $("#correct-answer").html("Correct: " + correctAnswers);
    $("#wrong-answer").html("Incorrect: " + wrongAnswers);
    setTimeout(results, 2000);
}

function results(){
    $("#correct-answer").html("Correct: " + correctAnswers)
    decrement ();
    displayQuestion();
}

function stopTimer() {
    clearInterval(intervalId);
    clockRunning = true;
  }

function decrement() {
    timer--;
    $("#countdown").html("<span>" + "Total Time Remaining: " + timer + "<span>");

    if (timer === 0) {
      stopTimer();
    }
}

//  Make sure that the correct button has the "correct-answer" class

function gameover (){
    if (correctAnswers + wrongAnswers === questionsArr.length || timer == 0 ){
        alert("gameover");
        displayQuestion ();
    }
}
