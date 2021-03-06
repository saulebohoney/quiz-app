//QUESTIONS////////////////////////////////////////////////////////////
const questions=[
    {
        question:'What is the capital of Virginia?',
        answers:['Richmond','Roanoke','Ashburn'],
        correctAnswer: ['Richmond']
    },

    {
        question:'What is the capital of Utah?',
        answers:['Park City','Provo','Salt Lake City'],
        correctAnswer: ['Salt Lake City']
    },
    { 
        question:'What is the captial of Massachusetts?',
        answers:['Norwell','Boston','Worcester'],
        correctAnswer: ['Boston']

    },
    { 
        question:'What is the capital of Maine?',
        answers:['Portland','Bangor','Augusta'],
        correctAnswer: ['Augusta']

    },
    { 
        question:'What is the capital of Florida?',
        answers:['Orlando','Tallahassee','Miami'],
        correctAnswer: ['Tallahassee']
    }
];


//appState/////////////////////////////////////////////////////////////////
const appState ={
    currentId: null,
    currentQuestion: {},
    currentScore: 0,
    userAnswer: ' ',
    answerStatus: null,

};

//MOD FUNCTIONS////////////////////////////////////////////////////////////////////////
function addQuestion(state){
    if (state.currentId) state.currentId++;
    else state.currentId = 1;
    state.currentQuestion = questions[appState.currentId-1];
    state.answerStatus = null;
}


function checkAnswer(state, userChoice) {
    state.userAnswer = userChoice;
    if (userChoice == state.currentQuestion.correctAnswer) {
        state.answerStatus = true;
        state.currentScore++;
    } else {state.answerStatus = false;}
}

function startOver(state){
    state.currentId =null;
    state.currentQuestion= {};
    state.currentScore= 0;
    state.userAnswer=' ';
    state.answerStatus=null;
}


//RENDER FUNCTIONS////////////////////////////////////////////////////////////
//
const render = function(state,element){
    if (state.currentId == null){
        renderHome(state, element);
    } else if (state.currentId <= questions.length && state.answerStatus == null){
        renderList(state, element);
    } else if (state.currentId <= questions.length && state.answerStatus == true){
        renderCorrect(state, element);
    } else if (state.currentId <= questions.length && state.answerStatus == false){
        renderWrong(state, element);
    }else{renderFinish(state, element);

    }
     
};


       
const renderList = function(state, element) {

    element.html(`<div class='two'>
        <h1>Question ${state.currentId}</h1>
        <p>${state.currentQuestion.question}</p>

         
            <input type="radio" name="answer" value="${state.currentQuestion.answers[0]}">${state.currentQuestion.answers[0]}<br>
            <input type="radio" name="answer" value="${state.currentQuestion.answers[1]}">${state.currentQuestion.answers[1]}<br>
            <input type="radio" name="answer" value="${state.currentQuestion.answers[2]}">${state.currentQuestion.answers[2]}
            <button class='answer'>Submit</button>

    </div>

    <div>Current Question ${state.currentId} out of ${questions.length}</div>
    <div>Current Score: ${state.currentScore} out of ${questions.length}</div>

    `);
};

const renderHome = function(state, element) {

    element.html(
        `<div>
        <h1>State Capital Quiz</h1>
        <p>How well do you know your capitals?</p>

        <button class="start-quiz">Start Quiz</button>
    
        </div>`);
};

const renderFinish = function(state, element){

    element.html(`
    <div>
        <p>Your final score was ${state.currentScore} out of ${questions.length}</p>
        
            <button class="finish-button">Start Over!</button>
    </div>`);
};

const renderCorrect = function(state, element) {

    element.html(
        `<div>
    <h4>Congrats!</h4>
    <p>You answered correctly!</p>
    </div>
    <button class="next-question">Next</button>`);
}

const renderWrong = function(state, element) {

    element.html(`
        <div>
        <h4>Incorrect</h4>
        <p>We're sorry the correct answer was ${state.currentQuestion.correctAnswer}.</p>
        </div>
        <button class="next-question">Next</button>`);
}
//EVENT LISTENERS///////////////////////////////////////////////////////////////

$('.quiz-entry').on('click','.start-quiz',function(event){
    addQuestion(appState);
    render(appState, $('.quiz-entry'));
});


$('.quiz-entry').on('click', '.answer', function(event){
    checkAnswer(appState, $('input:checked').val());
    render(appState,$('.quiz-entry'));
});

$('.quiz-entry').on('click', '.next-question', function (event){
    addQuestion(appState);
    render(appState, $('.quiz-entry'));
});

$('.quiz-entry').on('click','.finish-button',function(event){
    startOver(appState);
    render(appState,$('.quiz-entry'));
});



