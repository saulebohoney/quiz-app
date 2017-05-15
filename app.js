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
        correctAnswer: []

    },
    { 
        question:'this is questions four',
        answers:['a','b','c'],
        correctAnswer: []

    },
    { 
        question:'this is questions five',
        answers:['a','b','c'],
        correctAnswer: []
    }
];


//appState
const appState ={
    currentId: 0,
    currentQuestion: {},
    currentScore: 0,
    userAnswer: ' '

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

    console.log(appState.currentId);
    console.log(appState.currentQuestion);
}
addQuestion();
console.log(appState.currentId);

function checkAnswer(appState, userChoice) {
    appState.userAnswer = userChoice;
    if (appState.userAnswer === appState.correctAnswer) {
      alert('correct!');
    } else {alert(`Sorry! The correct answer is ${appState.correctAnswer}`)}
    console.log(appState.userAnswer);
    console.log(appState.correctAnswer);
}
checkAnswer(appState, 'b');

//mod score

//mod page number

//

//render functions


//event listeners