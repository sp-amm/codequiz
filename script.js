var startBtn = document.getElementById("start")
let quizQuestion = document.getElementById("question")
let answerOne = document.getElementById("btn1")
let answerTwo = document.getElementById("btn2")
let answerThree = document.getElementById("btn3")
let answerFour = document.getElementById("btn4")
let quList = document.getElementById("qulist")
let questionTitle = document.getElementById("title")
let rightOrWrong = document.getElementById("right")
//let buttonsGroup = document.getElementsByTagName("button")
//let correctButtons = document.getElementsByClassName("correct")    

const questionOne = {
    title: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5",],
    question: ["Commonly used data types DO NOT include:", "The condition with an if/else statement is enclosed within _____", "Arrays in javascript can be used to store:", "String values must be closed within _______ when being assigned to variables.", "A very useful tool used during development and debugging for printing content ",],
    answerone: ["strings","quotes", "numbers and strings", "commas", "javascript",],
    answertwo: ["booleans", "curly brackets", "other arrays", "terminal/bash", "visual studio code"],
    answerthree: ["alerts", "parentheses", "booleans", "quotes", "for loops",],
    answerfour: ["numbers", "square brackets", "all of the above", "parentheses", "console log",]
}

    //Start button click to begin quiz
    startBtn.addEventListener('click', startQuiz);

    function startQuiz(){
        startBtn.classList.add('hide');
        quList.classList.remove('hide');
        nextQuestion();
    };  
    
    //Correct answers are: 
    //questionOne.answerthree[1]), 
    //questionOne.answerthree[2]) 
    //questionOne.answerfour[3]){
    //questionOne.answerthree[4]){
    //questionOne.answerfour[5]){
    

    
    //Adding event listeners for buttons
    answerOne.addEventListener('click', rightWrong);
    answerTwo.addEventListener('click', rightWrong);
    answerThree.addEventListener('click', rightWrong);
    answerFour.addEventListener('click', rightWrong);
    
    let rightPick = "";
 
    
    //Getting the value of the button that is clicked to see if it's right
    function findRightButton(event){
        rightPick = event.target.innerText;
        //console.log(whichBtn.innerText);
        //rightPick = whichBtn.innerText;
        //console.log(rightPick);
        //console.log(rightPick) ;
        return rightPick;
          
    }
      
    console.log(rightPick);  
   //if (whichBtn.innerText == "alerts"){
    //   rightPick = 1;
     //   } 
      //  else {rightPick = 0};
    
    

    //Setting variable for correct answers
    var rightCount = 0

    
    //RIght answer count, and delay on execution of next question function to display right/wrong answer text.
    function rightWrong(rightPick){
        if (findRightButton(event) == "alerts"){
        rightCount++;
        rightOrWrong.innerText = "Right Answer"
        setTimeout(()=> nextQuestion(),1000);    
    } else 
        rightOrWrong.innerText = "Wrong Answer"
        //Makes sure that the RIght Answer displays for 1 second before moving to the next question
        setTimeout(()=> nextQuestion(),1000);
    }        
    
    var questionCount = 0
    
    function nextQuestion(){
        showNextQuestion();
        questionCount++;
    };


    
    function showNextQuestion(){

        if (questionCount >= 5){
        questionTitle.innerText = "CONGRATS"
        quizQuestion.innerText = "You've finished the Quiz."
        quList.classList.add('hide');
        rightOrWrong.innerText = "You scored " + rightCount + "!";
        }
        else{
        rightOrWrong.innerText = "";
        questionTitle.innerText = questionOne.title[questionCount];
        quizQuestion.innerText = questionOne.question[questionCount];
        answerOne.innerText = questionOne.answerone[questionCount];
        answerTwo.innerText = questionOne.answertwo[questionCount];
        answerThree.innerText = questionOne.answerthree[questionCount];
        answerFour.innerText = questionOne.answerfour[questionCount];
    
    };
    }
    
