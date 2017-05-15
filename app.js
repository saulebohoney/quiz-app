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
    id: 0,
    question:questions.question,
    answers:questions.answers,
    correctAnswer:questions.correctAnswer,
    userAnswer:questions.answers,
    score:0
};

//mod functions
function addQuestion(appState, index){
    appState.id++;
    appState.questions.push([0]);

    console.log(state);
}
addQuestion();

//render functions


//event listeners