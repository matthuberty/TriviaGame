var questions = [{
  question: "Which word is a synonym for ephemeral?",
  answers: ["Fast", "Transitory", "Happy", "Morose"],
  correctAnswer: "Transitory",

  question: "Which word is a synonym for obtuse?",
  answers:["Stupid", "Quick-witted", "Silly", "Melancholic"],
  correctAnswer:  "Stupid",

  question:  "Which word describes someone who hates men?",
  answers:["Gynecologist", "Misogynist", "Misanthrope", "Misandrist"],
  correctAnswer:  "Misandrist",

  question:  "Which word is a synonym for the hobby of stamp collecting?",
  answers:["Hobbyism", "Notaphily", "Numismatics", "Deltiology"],
  correctAnswer:  "Numismatics",

  question:  "Which word describes someone who loves Great Britain?",
  answers:["Hibernophile", "Anglophile", "Germanophile", "Hispanophile"], 
  correctAnswer:  "Anglophile",

  question:  "Which word is similar to the word: behemoth?", 
  answers: ["Diminutive", "Leviathan", "Mediocre", "Bijou"],
  correctAnswer: "Leviathan",
  
  question: "Which word is an antonym for the word:  misanthrope?",
  answers:["Cinephile", "Ephemeral", "Gregarious", "Ammophilous"], 
  correctAnswer: "Gregarious",

  question:  "Which word describes equal rights of citizenship?",
  answers: ["Autocracy", "Bipartisan", "Equanimity", "Isopolity"], 
  correctAnswer:  "Isopolity", 

  question: "Which word describes a gentle breeze?",
  answers:  ["Zephyr", "Gale", "Citrion", "Exudate"],
  correctAnswer:  "Zephyr",

  question:  "Which word describes something very important?",
  answers: ["Antebellum", "Epochal", "Colliquial", "Sartorial"], 
  correctAnswer:  "Epochal",

  question:  "Which word describes something of doubtful authenticity?", 
  answers:  ["Brevity", "Apocryphal", "Trepidation", "Pasquale"], 
  correctAnswer:  "Apocryphal",
  },
]

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  done: function() {
  // TODO Check correct answers
    
  }
}