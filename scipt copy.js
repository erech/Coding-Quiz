    // Start Game Section
let start = document.querySelector('.startCard') ;
let startBtn = document.querySelector('#startBtn') ;
let timerEl = document.querySelector('#timer');

// Header Section
let highScores = document.querySelector('#highScores') ;
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
let scores = document.querySelector('.scoreCard') ;


const questions = [
    {
        question : 'Commonly used data types DO Not Include:' ,
        answers: [
            {text: 'strings', correct: false}, 
            {text: 'bools', correct: false}, 
            {text: 'alerhtrs', correct: true}, 
            {text: 'numefds', correct: false}
        ] 
    },
    {
        question : 'Cdfsdfwef:' ,
        answers: [
            {text: 'strings', correct: false}, 
            {text: 'bools', correct: false}, 
            {text: 'alerhtrs', correct: true}, 
            {text: 'numefds', correct: false}
        ] 
    },
    {
        question : 'sdfsehdthfthtfe:' ,
        answers: [
            {text: 'strings', correct: false}, 
            {text: 'bools', correct: false}, 
            {text: 'alerhtrs', correct: true}, 
            {text: 'numefds', correct: false}
        ] 
    },
    {
        question : 'CommonlsdfsdffsdfsInclude:' ,
        answers: [
            {text: 'strings', correct: false}, 
            {text: 'bools', correct: false}, 
            {text: 'alerhtrs', correct: true}, 
            {text: 'numefds', correct: false}
        ] 
    },
    {
        question : 'sergsrfdvsere:' ,
        answers: [
            {text: 'strings', correct: false}, 
            {text: 'bools', correct: false}, 
            {text: 'alerhtrs', correct: true}, 
            {text: 'numefds', correct: false}
        ] 
    }
] ;

//Don't want to show
submit.style.display = 'none' ;
scores.style.display = 'none' ;
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
            } else {
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
    clearStatusClass(document) ;
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
function renderLastRegistered() {

    let userInput = document.querySelector('#userInput') ;

  } ;

submitBtn.addEventListener("click", function() {
    submit.style.display = "none" ;
    scoreBoard.style.display = "block" ;
    renderLastRegistered() ;
});
