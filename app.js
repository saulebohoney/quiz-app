//question:
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


//appState
const appState ={
    currentId: null,
    currentQuestion: {},
    currentScore: 0,
    userAnswer: ' ',
    

    /*
    question:questions.question,
    answers:questions.answers,
    correctAnswer:questions.correctAnswer,
    userAnswer:questions.answers,
    score:0
    */
};

//mod functions
function addQuestion(state){
    if (state.currentId) state.currentId++;
    else state.currentId = 0;
    state.currentQuestion = questions[appState.currentId]
    //questions[2]
    //questions[x-1]
    //questions[state.currentId-1]

    //console.log(appState.currentId);
}
addQuestion(appState);
console.log(addQuestion);

//mod to check answers
function checkAnswer(state, userChoice) {
    appState.userAnswer = userChoice;
    if (userChoice == appState.currentQuestion.correctAnswer) {
      alert('correct!');
      appState.currentScore++;
    } else {alert(`Sorry! The correct answer is ${appState.currentQuestion.correctAnswer}`)}
    console.log(userChoice);
    console.log(appState.currentQuestion.correctAnswer);
    console.log(appState.currentScore);
}

console.log(appState.currentScore);

console.log(questions.length);

function checkButton(){
    return $('input[type=radio]:checked').val();
   }


checkButton(appState);
console.log(checkButton);


//Question Template 

const renderList = function(state, element) {

element.html(`<div>
        <h1>Question ${state.currentId+1}</h1>
        <p>${state.currentQuestion.question}</p>

        <form action="">    
            <input type="radio" name="answer" value="a">${state.currentQuestion.answers[0]}<br>
            <input type="radio" name="answer" value="b">${state.currentQuestion.answers[1]}<br>
            <input type="radio" name="answer" value="c">${state.currentQuestion.answers[2]}
            <button class='answer'>Submit</button>
        </form>
    </div>

    <div>Current Question ${state.currentId+1} out of ${questions.length}</div>
    <div>Current Score: ${state.currentScore} out of ${questions.length}</div>

    `);
};

//event listeners

//start button

$('.start-quiz').click(function(event){
    //alert("it works");
    addQuestion(appState);
    renderList(appState, $('.quiz-entry'));
    //$(this)[0].reset();
});


// $('.answer').click(fucntion(event){

// })



//$("input:checked").val() (use a filter)
//start over
//