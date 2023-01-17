    // Start Game Section
let start = document.querySelector('.startCard') ;
let startBtn = document.querySelector('#startBtn') ;
let timerEl = document.querySelector('#timer');

// Header Section
let highScores = document.querySelector('#highScores') ;
let scoreText = document.querySelector('#scoreTxt') ;
let timer = document.querySelector('#timer') ;

//Quiz Section
let quiz = document.querySelector('.questionContainer') ;
let questionEl = document.querySelector('#questionTxt') ;
let nextBtn = document.querySelector('#nextBtn') ;
let options = document.querySelector('.options') ;

let correct = document.querySelector('.correct') ;
let wrong = document.querySelector('.wrong') ;
let resultShow = document.querySelector('resultShow') ;

let shuffledQuestions, currentQuestionIndex ;

// Finish Quiz Section
let submit = document.querySelector('.doneCard') ;
let submitBtn = document.querySelector('#submit') ;
let currentScore = document.querySelector('#currentScore') ;
let scoreBoard = document.querySelector('.scoreCard') ;

//Quiz Questions
let questions = [
    {
        question : 'What is LIFO?' ,
        answers: [
            {text: 'Last In First Out', correct: true}, 
            {text: 'List In First Over', correct: false}, 
            {text: 'Last Inside Function Over', correct: false}, 
            {text: 'Linked In Forward Output', correct: false}
        ] 
    },
    {
        question : 'What is Recursion?' ,
        answers: [
            {text: 'A function that calls itself based on a terminating condition', correct: true}, 
            {text: 'A type of Object-Oriented Programming', correct: false}, 
            {text: 'A type of function that does not use LIFO', correct: false}, 
            {text: 'Refers to wrapping code and data into a single unit', correct: false}
        ] 
    },
    {
        question : 'Which one is a programming language?' ,
        answers: [
            {text: 'LOLCODE', correct: true}, 
            {text: 'French', correct: false}, 
            {text: 'Blender', correct: false}, 
            {text: 'Pudding', correct: false}
        ] 
    },
    {
        question : 'What is a conditional Statement?' ,
        answers: [
            {text: 'Statements that evaluate to true or false', correct: true}, 
            {text: 'Used to do something else when condition of statement is not true', correct: false}, 
            {text: 'Allows user to run a block of code repeatedly', correct: false}, 
            {text: 'A block of code that can be referenced by name', correct: false}
        ] 
    },
    {
        question : 'What is a text-based interface to send commands to the computer' ,
        answers: [
            {text: 'terminal', correct: true}, 
            {text: 'syntax', correct: false}, 
            {text: 'source code', correct: false}, 
            {text: 'data', correct: false}
        ] 
    }
] ;

//Default display no show
submit.style.display = 'none' ;
scoreBoard.style.display = 'none' ;
quiz.style.display = 'none' ;


//Upon clicking 'Start' button, quiz appears and timer starts
startBtn.addEventListener('click', function (){
    
    start.style.display = 'none';
    quiz.style.display = 'block' ;

    shuffledQuestions = questions.sort(() => Math.random() - 0.5) ;
    currentQuestionIndex = 0

    countdown () ;
    setNextQuestion() ; 

    //Timer function
    function countdown () {
        var timeLeft = 60 ;

        var timeInterval = setInterval(function() {
            if (timeLeft > 1) {
                timerEl.textContent = timeLeft; 
                timeLeft-- ;
            } 
            else {
                timerEl.textContent = '';
                clearInterval(timeInterval) ;
                displayEnd();
            }
        }, 1000) ;
    }

    function displayEnd() {
        quiz.style.display = 'none' ;
        submit.style.display = 'block' ;
    } ;
}) ;

nextBtn.addEventListener('click', ()=> {
    currentQuestionIndex++ ; 
    setNextQuestion() ;
}) ;
//Set Point Tracker
let currentQuestion = {} ;
let score = 0 ;
let questionCounter = 0 ; 
let availableQuestions = 5 ;


const scorePoints = 100 ;
const maxQuestions = 5 ;

//Set Questions
function setNextQuestion() {
    reset() ;
    showQuestion(shuffledQuestions[currentQuestionIndex]) ;
} ;

function showQuestion (question) {
    questionEl.innerText = question.question ;

    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text ;
        button.classList.add('btn') ;

        if(answer.correct) {
            button.dataset.correct = answer.correct ;
        } ; 
        button.addEventListener('click' , selectAnswer) ;
        options.appendChild(button) ;
    }) ;

};

//resets background to default for each question
function reset () {
    clearStatusClass(document.body) ;
    nextBtn.style.display = "none" ;

    while(options.firstChild) {
        options.removeChild (options.firstChild);
    };
};


function selectAnswer (i) {
    const selectedBtn = i.target ;
    const correct = selectedBtn.dataset.correct ;
    setStatusClass(document.body, correct) ;
    Array.from(options.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct) ;
    }); 

    nextBtn.style.display = "block" ;

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.style.display = "block" ;
    } else {
        submit.style.display = "block" ;
        quiz.style.display = "none" ;
        startBtn.innerText = 'Submit' ;
        startBtn.classList.remove('none') ;
    }
} ;


function setStatusClass(element, correct) {
    clearStatusClass(element) ;
    if (correct) {
        element.classList.add('correct') ;

    } else {
        element.classList.add('wrong') ;
    }; 
};

function clearStatusClass(element) {
    element.classList.remove('correct') ;
    element.classList.remove('wrong') ;
}


//Submission form; Retrieve intials and render to score page
let userInput = document.querySelector('#userInput') ;

//load existing data if any
function startQuiz() {
    scoreBoard = JSON.parse(localStorage.getItem("score"));
    if (scoreBoard == null) return scoreBoard = {totalClicks : 0};
    userInput = scoreBoard.userInput;
    availableQuestions = scoreBoard.availableQuestions;
    incorrectAns = scoreBoard.incorrectAns;
    correctAns = scoreBoard.correctAns;
}

//save current data
function saveQuiz() {
    scoreBoard.availableQuestions = availableQuestions;
    scoreBoard.incorrectAns = incorrectAns;
    scoreBoard.correctAns = correctAns;
    localStorage.setItem("score", JSON.stringify(saveData));
}

submitBtn.addEventListener("click", function() {
    submit.style.display = "none" ;
    scoreBoard.style.display = "block" ;
    saveQuiz() ;
});

//clear high scores
function clearData() {
    console.log("Clearing all data!");
    localStorage.clear();
}