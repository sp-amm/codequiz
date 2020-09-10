var startBtn = document.getElementById("start")
let quizQuestion = document.getElementById("question")
let answerOne = document.getElementById("a1")
let answerTwo = document.getElementById("a2")
let answerThree = document.getElementById("a3")
let answerFour = document.getElementById("a4")
let quList = document.getElementById("qulist")

    
const starter = {
    question: "Welcome to the javascript quiz. Press start and good luck.",
    answerone: "Start",
}

const questionOne = {
    question: "Commonly used data types DO NOT include:",
    answerone: "strings",
    answertwo: "booleans",
    answerthree: "alerts",
    answerfour: "numbers", 
}

const questionTwo = {
    question: "The condition with an if/else statement is enclosed within _____",
    answerone: "quotes",
    answertwo: "curly brackets",
    answerthree: "parentheses",
    answerfour:  "square brackets",
}    

const questionThree = {
    question: "Arrays in javascript can be used to store:",
    answerone: "numbers and strings",
    answertwo: "other arrays",
    answerthree: "booleans",
    answerfour: "all of the above", 
}            

const questionFour = {
    question: "String values must be closed within _______ when being assigned to variables.",
    answerone: "commas",
    answertwo: "curly brackets",
    answerthree: "quotes",
    answerfour: "parentheses",
}                

const questionFive = {
    question: "A very useful tool used during development and debugging for printing content ",
    answerone: "javascript",
    answertwo: "terminal/bash",
    answerthree: "for loops",
    answerfour: "console log", 
}      
   
startBtn.addEventListener('click', function(){
    console.log("start");
        startBtn.classList.add('hide');
        quList.classList.remove('hide');
    });  
   
//function startHide()
    
   
        

    //function nextQuestion(){

   // }

  //  function chooseAnswer(){

  //  }

  //  function countRight(){

//}