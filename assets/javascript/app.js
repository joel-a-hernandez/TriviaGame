var questionOne = {
    question: "Who won the 1999 NBA championship?",
    answersOne: ["a. bulls", "b. knicks", "c. spurs", "d. lakers"],
    correctAnswerOne: "spurs"
}

var questionTwo = {
    question: "How many superbowls do the patriots have?",
    answersTwo: ['a. 8','b. 6','c. 15','d. 3'],
    correctAnswerTwo: "b. 6"
}

var questionThree = {
    question: "How many superbowls do the patriots have?",
    answersTwo: ['8','6','15','3'],
    correctAnswerTwo: "6"
}

var timer = 30;
var clockRunning = true;
var correctAnswers = 0;

$("#question").text(questionOne.question).hide();
$("#buttonOne").text(questionOne.answersOne[0]).hide();
$("#buttonTwo").text(questionOne.answersOne[1]).hide();
$("#buttonThree").text(questionOne.answersOne[2]).hide();
$("#buttonFour").text(questionOne.answersOne[3]).hide();


$("#startButton").click(function(){
    $("#question").show();
    $("#buttonOne").show();
    $("#buttonTwo").show();
    $("#buttonThree").show();
    $("#buttonFour").show();
    $("#startButton").hide();
    intervalId = setInterval(decrement, 1000);
})

  function decrement() {
    timer--;
    $("#countdown").html("<span>" + timer + "<span>");

    if (timer === 0) {
      stopTimer();
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    clockRunning = false;
  }

  $("#buttonThree").click(function(){
    console.log("correct");
    alert("good job");
    stopTimer();
    correctAnswers++;
  })

