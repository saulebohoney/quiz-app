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
    currentId: 0,
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
function addQuestion(state, index){
    appState.currentId++;
    appState.currentQuestion = questions[appState.currentId-1];
    //questions[2]
    //questions[x-1]
    //questions[state.currentId-1]

    //console.log(appState.currentId);
   // console.log(appState.currentQuestion);
}
addQuestion();
console.log(appState.currentId);

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
checkAnswer(appState, 'b');

console.log(appState.currentScore);

console.log(questions.length);
//Question Template 
const questionTemplate = function(state){
    console.log(state.currentQuestion.answers[0]);
    return 
    `<div>
        <h1>Question ${state.currentId}</h1>
        <p>${state.currentQuestion.question}</p>

        <form action="">    
            <input type="radio" name="answer" value="a">${state.currentQuestion.answers[0]}<br>
            <input type="radio" name="answer" value="b">${state.currentQuestion.answers[1]}<br>
            <input type="radio" name="answer" value="c">${state.currentQuestion.answers[2]}
        </form>
    </div>

    <div>

        <form>
            <button>Submit</button>
        </form>

    <div>Current Question ${state.currentId} out of ${questions.length}</div>
    <div>Current Score: ${state.currentScore} out of ${questions.length}</div>

    </div>`;
}
questionTemplate(appState);
//console.log(questionTemplate);


//render functions


//event listeners