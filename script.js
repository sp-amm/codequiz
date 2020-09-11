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
    answerthree: ["alerts" === true, "parentheses" ===true, "booleans", "quotes" === true, "for loops",],
    answerfour: ["numbers", "square brackets", "all of the above" === true, "parentheses", "console log" ===true,]
}

    //Start button click to begin quiz
    startBtn.addEventListener('click', startQuiz);

    function startQuiz(){
        startBtn.classList.add('hide');
        quList.classList.remove('hide');
        nextQuestion();
    };  
    
    //Attaching correct answer class to buttons that have correct asnswer
    //if (answerThree.innerText === questionOne.answerthree[1]){ 
    //    answerThree.classList.add('correct');
   // } else {answerThree.classList.remove('correct')};

   // if (answerThree.innerText === questionOne.answerthree[2]){    
   //     answerThree.classList.add('correct');
   // } else {answerThree.classList.remove('correct')}; 
    
   // if (answerFour.innerText === questionOne.answerfour[3]){
    //    answerFour.classList.add('correct');
   // } else {answerFour.classList.remove('correct')}; 
    
    //if (answerThree.innerText === questionOne.answerthree[4]){
     //   answerThree.classList.add('correct');
    //} else {answerThree.classList.remove('correct')}; 
    
    //if (answerFour.innerText === questionOne.answerfour[5]){
     //   answerFour.classList.add('correct');
    //} else {answerFour.classList.remove('correct')}; 

    
    //Adding event listeners for correct and incorrect buttons
    //correctButtons.addEventListener('click', rightAnswer);

    answerOne.addEventListener('click', rightWrong);
    answerTwo.addEventListener('click', rightWrong);
    answerThree.addEventListener('click', rightWrong);
    answerFour.addEventListener('click', rightWrong);
    
    //Setting variable for correct answers
    var rightCount = 0
    
    //RIght answer count, and delay on execution of next question function to display right/wrong answer text.
    function rightWrong(){
        if (this.innerText === true){
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
            questionTitle.innerText = "CONGRATULATIONS"
            quizQuestion.innerText = "You've finished the Quiz."
            quList.classList.add('hide');
            rightOrWrong.innerText = "You scored " + rightCount + "!";
        }else{
        rightOrWrong.innerText = "";
        questionTitle.innerText = questionOne.title[questionCount];
        quizQuestion.innerText = questionOne.question[questionCount];
        answerOne.innerText = questionOne.answerone[questionCount];
        answerTwo.innerText = questionOne.answertwo[questionCount];
        answerThree.innerText = questionOne.answerthree[questionCount];
        answerFour.innerText = questionOne.answerfour[questionCount];
    
    };
    }
    
