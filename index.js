var readlineSync = require('readline-sync');
var score = 0;
function print(data){
  console.log(data);
}

var questionArray = [
  {
    question : "am older than 30 years ? ",
    answer : "NO",
  },
  {
    question : "Where i live ? ",
    answer : "Beed",
  },
  {
    question : "Which is her favourite color ? ",
    answer : "White",
  },
  {
    question : "Which game she played ? ",
    answer : "TableTennis",
  },
  
];

function printScore(score){
  if(score > 0){
    console.log("Score : " + score);
  }else{
    console.log("Score : 0");
  }
}

function playGame(question , answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    print("You are correct ");
    score = score + 1;
    printScore(score);
    print("--------------------------------------------------------");
  }else{
    print("WRONG...! ");
    if(score > 0){
      score = score - 1;
    }
    printScore(score);
    print("--------------------------------------------------------");
  }
}
var userName = readlineSync.question("Hey!...what's your name ? ");
print("Welcome "+ userName +" to DO YOU KNOW SHUBHANGI");
print("Okay then start the game...");
print("------------------------------------------------------------");

for(var i = 0; i< questionArray.length; i++){
  currentObject = questionArray[i];
  playGame(currentObject.question , currentObject.answer);
}

print("You Scored "+ score);