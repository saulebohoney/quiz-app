//question:
const questions=[
    {
        question:'this is questions one',
        answers:['a','b','c'],
        correctAnswer: []
    },

    {
        question:'this is questions two',
        answers:['a','b','c'],
        correctAnswer: []
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
    currentScore: 0

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
    appState.currentQuestion = questions[appState.currentId-1]
    //questions[2]
    //questions[x-1]
    //questions[state.currentId-1]

    console.log(appState.currentId);
}
console.log(appState.currentId);

//render functions


//event listeners