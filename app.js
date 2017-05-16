//QUESTIONS////////////////////////////////////////////////////////////
const questions=[
    {
        question:'this is questions one',
        answers:['a','b','c'],
        correctAnswer: ['b']
    },

    {
        question:'this is questions two',
        answers:['a','b','c'],
        correctAnswer: ['b']
    },
    { 
        question:'this is questions three',
        answers:['a','b','c'],
        correctAnswer: ['b']

    },
    { 
        question:'this is questions four',
        answers:['a','b','c'],
        correctAnswer: ['b']

    },
    { 
        question:'this is questions five',
        answers:['a','b','c'],
        correctAnswer: ['b']
    }
];


//appState/////////////////////////////////////////////////////////////////
const appState ={
    currentId: null,
    currentQuestion: {},
    currentScore: 0,
    userAnswer: ' ',
};

//MOD FUNCTIONS////////////////////////////////////////////////////////////////////////
function addQuestion(state){
    if (state.currentId) state.currentId++;
    else state.currentId = 1
    state.currentQuestion = questions[appState.currentId-1]

// if (state.currentId === true && state.currentId > questions.length); {
//     //run the render function for finish

// } else (state.currentId === true && state.currentId < questions.length); {
// state.currentId++;
// } else if {state.currentId = 1}

}

function checkAnswer(state, userChoice) {
    state.userAnswer = userChoice;
    if (userChoice == state.currentQuestion.correctAnswer) {
      alert('correct!');
      state.currentScore++;
    } else {alert(`Sorry! The correct answer is ${state.currentQuestion.correctAnswer}`)}
}



function finishPage(state){
    if((state.CurrentId) > questions.length){
        renderFinish(state, $('.quiz-entry'));
} else {addQuestions(state);
        // renderList(appState, $('.quiz-entry'));
}
}


//         const originalState=$(".quiz-entry").clone();
//        $(".quiz-entry").replaceWith(originalState);
//     }
// }
// var originalState = $("#some_div").clone();
// $("#some_div").replaceWith(originalState);
// Question Template 


//RENDER FUNCTIONS////////////////////////////////////////////////////////////
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
        <h1>Quiz App</h1>
        <p>This Quizz app tests your knowledge in various things.</p>

        <button class="start-quiz">Start Quiz</button>
    
        </div>`);
};

const renderFinish = function(state, element){

    element.html(`
    <div>
        <p>Your final score was ${state.currentScore} out of 5</p>
        
            <button class="finish-button">Start Over!</button>
    </div>`);
};


//EVENT LISTENERS///////////////////////////////////////////////////////////////

$('.start-quiz').click(function(event){
    addQuestion(appState);
    renderList(appState, $('.quiz-entry'));

});


$('.quiz-entry').on('click', '.answer', function(event){
    checkAnswer(appState, $("input:checked").val());
     //finishPage(appState);
     addQuestion(appState);
     renderList(appState, $('.quiz-entry'));
     //renderFinish(appState,$('.quiz-entry'));
     //finishPage(appState,$('.quiz-entry'));
    // //"#myForm :input" 
    // console.log(checkAnswer);
    // console.log($("input:checked").val());
});



//$("input:checked").val() (use a filter)
//start over

$('.finish-button').click(function(event){

});

