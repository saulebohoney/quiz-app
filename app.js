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

};

//MOD FUNCTIONS////////////////////////////////////////////////////////////////////////
function addQuestion(state){
    if (state.currentId) state.currentId++;
    else state.currentId = 1;
    state.currentQuestion = questions[appState.currentId-1];
}

// function nextQuestion(state){
//       if (state.currentId > questions.length) {

    
//     } else {
//         addQuestion(state);
//             }
// }

function checkAnswer(state, userChoice) {
    state.userAnswer = userChoice;
    if (userChoice == state.currentQuestion.correctAnswer) {
        alert('correct!');
        state.currentScore++;
    } else {alert(`Sorry! The correct answer is ${state.currentQuestion.correctAnswer}`);}
}



// function finishPage(state){
//     if((state.CurrentId) > questions.length){

//        // renderFinish(state, $('.quiz-entry'));
//     } else {addQuestions(state);
//         // renderList(appState, $('.quiz-entry'));
//     }
// }


//         const originalState=$(".quiz-entry").clone();
//        $(".quiz-entry").replaceWith(originalState);
//     }
// }
// var originalState = $("#some_div").clone();
// $("#some_div").replaceWith(originalState);
// Question Template 


//RENDER FUNCTIONS////////////////////////////////////////////////////////////
//
const render = function(state,element){
    if (state.currentId == null){
        renderHome(state, element);
    } else if (state.currentId <= questions.length){
        renderList(state, element);
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


//EVENT LISTENERS///////////////////////////////////////////////////////////////

$('.start-quiz').click(function(event){
    addQuestion(appState);
    render(appState, $('.quiz-entry'));

});


$('.quiz-entry').on('click', '.answer', function(event){
    checkAnswer(appState, $('input:checked').val());
    addQuestion(appState);
    //console.log(appState.currentId);
    render(appState,$('.quiz-entry'));
     //finishPage(appState);
    // nextQuestion(appState);
    // renderList(appState, $('.quiz-entry'));
    
    //  //renderFinish(appState,$('.quiz-entry'));
     //finishPage(appState,$('.quiz-entry'));
    // //"#myForm :input" 
    // console.log(checkAnswer);
    // console.log($("input:checked").val());
});



//$("input:checked").val() (use a filter)
//start over

// $('.finish-button').click(function(event){

// });

