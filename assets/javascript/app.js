$(document).ready(function () {

  var questions = [
    {
      question: "Which word is a synonym for ephemeral?",
      answers: ["Fast", "Transitory", "Happy", "Morose"],
      correctAnswer: "Transitory",
    },
    {
      question: "Which word is a synonym for obtuse?",
      answers: ["Stupid", "Quick-witted", "Silly", "Melancholic"],
      correctAnswer: "Stupid",
    },
    {
      question: "Which word describes someone who hates men?",
      answers: ["Gynecologist", "Misogynist", "Misanthrope", "Misandrist"],
      correctAnswer: "Misandrist",
    },
    {
      question: "Which word is a synonym for the hobby of stamp collecting?",
      answers: ["Hobbyism", "Notaphily", "Numismatics", "Deltiology"],
      correctAnswer: "Numismatics",
    },
    {
      question: "Which word describes someone who loves Great Britain?",
      answers: ["Hibernophile", "Anglophile", "Germanophile", "Hispanophile"],
      correctAnswer: "Anglophile",
    },
    {
      question: "Which word is similar to the word: behemoth?",
      answers: ["Diminutive", "Leviathan", "Mediocre", "Bijou"],
      correctAnswer: "Leviathan",
    },
    {
      question: "Which word is an antonym for the word:  misanthrope?",
      answers: ["Cinephile", "Ephemeral", "Gregarious", "Ammophilous"],
      correctAnswer: "Gregarious",
    },
    {
      question: "Which word describes equal rights of citizenship?",
      answers: ["Autocracy", "Bipartisan", "Equanimity", "Isopolity"],
      correctAnswer: "Isopolity",
    },
    {
      question: "Which word describes a gentle breeze?",
      answers: ["Zephyr", "Gale", "Citrion", "Exudate"],
      correctAnswer: "Zephyr",
    },
    {
      question: "Which word describes something very important?",
      answers: ["Antebellum", "Epochal", "Colliquial", "Sartorial"],
      correctAnswer: "Epochal",
    },
    {
      question: "Which word describes something of doubtful authenticity?",
      answers: ["Brevity", "Apocryphal", "Trepidation", "Pasquale"],
      correctAnswer: "Apocryphal",
    }
  ];

  var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    myTime: 0,

    countdown: function (myTime) {
      game.counter--;
      console.log(game.counter);
      $("#timer").text("Time remaining:  " + game.counter);
      if (game.counter === 0) {
        console.log("TIME UP");
        game.done();
      }
    },

    done: function () {
      // TODO Check correct answers
      //Hide the id = quizDiv & id = timer
      //UNHIDE THE NEXT 3 LINES, AT SOME POINT, WHEN
      //YOU HAVE ANSWER CHECKING DONE.
      //$("#quizDiv").hide();
      $("#timer").hide();
      $("#submit").hide();
      clearInterval(myTime);
      //Tabulate and calculate the # of correct and incorrect answers

      //console.log($(".right-choice input:checked:").val());

      var userAnswer;
      //Display the results to the user
      // for (var i = 0; i < questions.length; i++){
      //     //console.log($("#inRadioButton0").val)
      //     //var isChk = $("#inRadioButton" + j).isChecked;
      //     console.log($("input:checked").val());
      //     if($("input:checked").val() === questions[i].correctAnswer){
      //       this.correct++;
      //     }
      //     else{
      //       this.incorrect++;
      //     }
      // }
      
      var i = 0;
      $.each($("input:checked"), function( index, value){
          if value === questions[index].correctAnswer{
            this.correct++;
          }
          else{
            this.incorrect++;
          }
      })
     
      // $('input:radio:checked').each(function () {
      //   // Iterate through all checked radio buttons
      //   if ($("input:checked").val() === questions[i].correctAnswer) {
      //     this.correct++;
      //   }
      //   else {
      //     this.incorrect++
      //   }
      //   i++
      // });

      // var i = 0;
      // $("input:checked").each(function () {
      //     if ($("input:checked").val() === questions[i].correctAnswer){
      //         this.correct++;
      //       }
      //     else{
      //       this.incorrect++;
      //     }
      //     i++;
      // });

      console.log(this.correct);
      console.log(this.incorrect);
      //$("#quizDiv").html("<br><br><p>Here are your results:</p>");
      //$("#quizDiv").append("Number of correct answers:  " + this.correct);
      //$("#quizDiv").append("<br>Number of incorrect answers:  " + this.incorrect);
    },

    start: function () {
      $("#myDiv").hide();
      //Show the quizDiv ID
      $("#quizDiv").show();
      //Show the submit ID
      $("#submit").show();
      //Show the timer ID
      $("#timer").show()
      for (var i = 0; i < questions.length; i++) {
        //Generate the HTML to fill the div / ul
        var newQuestion = $("<li>");
        newQuestion.addClass("list-group-item");
        newQuestion.text(questions[i].question);
        var answerGroup = $("<div>");
        answerGroup.addClass("right-choice");

        for (var j = 0; j < 4; j++) {
          var newAnswer = $("<div>");
          //form-check  form-check-inline, below
          newAnswer.addClass("form-check form-check-inline");
          var answerInput = $("<input>");
          //form-check-input, below
          answerInput.addClass("radio-inline");
          answerInput.attr("type", "radio");
          //inlineCheckbox
          answerInput.attr("id", "inRadioButton" + j);
          //"option" + j --> option0, option1, ...
          answerInput.attr("value", questions[i].answers[j]);
          //Added this line, below.
          answerInput.attr("name", questions[i].correctAnswer);
          newAnswer.append(answerInput);
          var answerLabel = $("<label>");
          //form-check-label, below 
          answerLabel.addClass("radio-inline");
          //inlineCheckbox
          answerLabel.attr("for", "inlineRadioButton" + j);
          answerLabel.text(questions[i].answers[j]);
          newAnswer.append(answerLabel);
          answerGroup.append(newAnswer);
        }
        newQuestion.append(answerGroup);
        //create all children of li, append to li
        $("#quizDiv").append(newQuestion);

      }
      //Call the countdown function, every 1 second.  Repeatedly
      //Call the countdown, after HTML has been generated and loaded.
      myTime = setInterval(game.countdown, 1000);

    }
  };


  //Start the game when the start-button is clicked.
  $(".start-button").on("click", game.start);
  $("submit").on("click", game.done);

}); // document . ready ends here


