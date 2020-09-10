var startBtn = document.getElementById("start")
let quizQuestion = document.getElementById("question")
let answerOne = document.getElementById("btn1")
let answerTwo = document.getElementById("btn2")
let answerThree = document.getElementById("btn3")
let answerFour = document.getElementById("btn4")
let quList = document.getElementById("qulist")
let questionTitle = document.getElementById("title")

    

const questionOne = {
    title: "Question 1",
    question: "Commonly used data types DO NOT include:",
    answerone: "strings",
    answertwo: "booleans",
    answerthree: "alerts",
    answerfour: "numbers", 
}

const questionTwo = {
    title: "Question 2",
    question: "The condition with an if/else statement is enclosed within _____",
    answerone: "quotes",
    answertwo: "curly brackets",
    answerthree: "parentheses",
    answerfour:  "square brackets",
}    

const questionThree = {
    title: "Question 3",
    question: "Arrays in javascript can be used to store:",
    answerone: "numbers and strings",
    answertwo: "other arrays",
    answerthree: "booleans",
    answerfour: "all of the above", 
}            

const questionFour = {
    title: "Question 4",
    question: "String values must be closed within _______ when being assigned to variables.",
    answerone: "commas",
    answertwo: "curly brackets",
    answerthree: "quotes",
    answerfour: "parentheses",
}                

const questionFive = {
    title: "Question 5",
    question: "A very useful tool used during development and debugging for printing content ",
    answerone: "javascript",
    answertwo: "terminal/bash",
    answerthree: "for loops",
    answerfour: "console log", 
}      
   

    startBtn.addEventListener('click', startQuiz);

    function startQuiz(){
        startBtn.classList.add('hide');
        quList.classList.remove('hide');
        nextQuestion();
    };  
      
    function nextQuestion(){
        showNextQuestion();
    };

    function showNextQuestion(){
        questionTitle.innerText = questionOne['title'];
        quizQuestion.innerText = questionOne['question'];
        answerOne.innerText = questionOne['answerone'];
        answerTwo.innerText = questionOne['answertwo'];
        answerThree.innerText = questionOne['answerthree'];
        answerFour.innerText = questionOne['answerfour'];
    };
   // }

  //  function chooseAnswer(){

  //  }

  //  function countRight(){

//}