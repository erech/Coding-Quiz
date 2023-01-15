AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score


# HTML

## Tasks

- Need header with "View high scores" and "Time : insert time"
- Need Start Button

- Game container
- Question container (can be hidden) + id for "question" 
- Options buttons (4 options)
- Container for answers at bottom


# CSS

- container for header
- Container for actual game
- hover change color for options

# JS

- timer

- Need an array for questions
- Response correct/incorrect
- alert 




    // function generateQuiz () {
    //     let currenQuestion = {} ;
    //     let isCorrect = true ;
    //     let score = 0; //cannot be seen
    //     let questionCounter = 0 ;
    //     let availableQuestions = [];

    //     questionTxt = [
    //         {questionTxt : "Commonly used data types DO Not Include:" ,
    //           a1: 'strings',
    //             a2: 'bools',
    //             a3: 'alerhts' ,
    //             a4: 'numher' ,
    //             resultShow: 2, 
    //         }, 
    //         {questionTxt : "The condition in an if/else statement is enclosed with _____" ,
    //         a1: 'strings',
    //         a2: 'bools',
    //         a3: 'alerhts' ,
    //         a4: 'numher' ,
    //         resultShow: 4, 
    //     }, 
    //         {questionTxt : "Arrays in JS cans doisflkjf" ,
    //         a1: 'strings',
    //         a2: 'bools',
    //         a3: 'alerhts' ,
    //         a4: 'numher' ,
    //         resultShow: 3, 
    //     }, 
    //         {questionTxt : "Strugn valuese fmyste be enslcosed w/in ewhern tljkfsd" ,
    //         a1: 'strings',
    //         a2: 'bools',
    //         a3: 'alerhts' ,
    //         a4: 'numher', 
    //         resultShow: 1, 
    //     }, 
    //         {questionTxt : "A vreyt aiel usel tolkdjf suse durgn it=deoi ogand dueognoi smofro aoringtin conterin cdoitoid osiconsoiej ociofrtdebu dfois is" ,
    //         a1: 'strings',
    //         a2: 'bools',
    //         a3: 'alerhts' ,
    //         a4: 'numher',
    //         resultShow: 3 ,
    //         }] ; 
    //     console.log(generateQuiz());
        
    // } ;







    // Start Game Section
let start = document.querySelector('.startCard') ;
let startBtn = document.querySelector('#startBtn') ;
let timerEl = document.querySelector('#timer');

// Header Section
let highScores = document.querySelector('#highScores') ;
let timer = document.querySelector('#timer') ;

//Quiz Section
let quiz = document.querySelector('.questionContainer') ;
let questionTxt = document.querySelector('#questionTxt') ;
let options = Array.from(document.querySelector('.options')) ;
// let a1 = document.querySelector('#btn1') ;
// let a2 = document.querySelector('#btn2') ;
// let a3 = document.querySelector('#btn3') ;
// let a4 = document.querySelector('#btn4') ;
let resultShow = document.querySelector('.resultShow') ;

// Finish Quiz Section
// let submit = document.querySelector('.doneCard') ;
let scores = document.querySelector('.scoreCard') ;

//Don't want to show
submit.style.display = 'none' ;
scores.style.display = 'none' ;
quiz.style.display = 'none' ;

//Upon clicking 'Start' button, quiz appears and timer starts
startBtn.addEventListener('click', function (){
    start.style.display = 'none';
    quiz.style.display = 'block' ;
    countdown () ;

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