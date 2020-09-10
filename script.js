var startBtn = document.getElementById("start")
let quizQuestion = document.getElementById("question")
let answerOne = document.getElementById("btn1")
let answerTwo = document.getElementById("btn2")
let answerThree = document.getElementById("btn3")
let answerFour = document.getElementById("btn4")
let quList = document.getElementById("qulist")
let questionTitle = document.getElementById("title")
let rightOrWrong = document.getElementById("right")
    

const questionOne = {
    title: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5",],
    question: ["Commonly used data types DO NOT include:", "The condition with an if/else statement is enclosed within _____", "Arrays in javascript can be used to store:", "String values must be closed within _______ when being assigned to variables.", "A very useful tool used during development and debugging for printing content ",],
    answerone: ["strings","quotes", "numbers and strings", "commas", "javascript",],
    answertwo: ["booleans", "curly brackets", "other arrays", "terminal/bash",],
    answerthree: ["alerts", "parentheses", "booleans", "quotes", "for loops",],
    answerfour: ["numbers", "square brackets", "all of the above", "parentheses", "console log",]
}
        
    
   

    startBtn.addEventListener('click', startQuiz);

    function startQuiz(){
        startBtn.classList.add('hide');
        quList.classList.remove('hide');
        nextQuestion();
    };  
    
    answerOne.addEventListener('click', rightWrong);
    answerTwo.addEventListener('click', rightWrong);
    answerThree.addEventListener('click', rightWrong);
    answerFour.addEventListener('click', rightWrong);
    
    var rightCount = 0
    
    function rightWrong(){
        if(innerText= "alerts" || "parentheses" || "all of the above" || "quotes" || "console log"){
            rightCount++;
            rightOrWrong.innerText = "Right Answer"
        } else {rightOrWrong.innerText = "Wrong Answer"};

        nextQuestion();
    }
    
    var questionCount = 0
    
    function nextQuestion(){
        showNextQuestion();
        questionCount++
    };

    function showNextQuestion(){
        questionTitle.innerText = questionOne.title[questionCount];
        quizQuestion.innerText = questionOne.question[questionCount];
        answerOne.innerText = questionOne.answerone[questionCount];
        answerTwo.innerText = questionOne.answertwo[questionCount];
        answerThree.innerText = questionOne.answerthree[questionCount];
        answerFour.innerText = questionOne.answerfour[questionCount];
    };

    if (questionCount >= 5){
        questionTitle.innerText = "CONGRATULATIONS"
        quizQuestion.innerText = "You've finished the Quiz."
    }
