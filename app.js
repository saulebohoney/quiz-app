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
function checkAnswer(appState, userChoice) {
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
const questionTemplate = function(appState){
    return 
    `<div>
        <h1>Question ${appState.currentId}</h1>
        <p>${appState.currentQuestion.question}</p>

        <form action="">    
            <input type="radio" name="answer" value="a">${appState.currentQuestion.answers[0]}<br>
            <input type="radio" name="answer" value="b">${appState.currentQuestion.answers[1]}<br>
            <input type="radio" name="answer" value="c">${appState.currentQuestion.answers[2]}
        </form>
    </div>

    <div>

        <form>
            <button>Submit</button>
        </form>

    <div>Current Question ${appState.currentId} out of ${questions.length}</div>
    <div>Current Score: ${appState.currentScore} out of ${questions.length}</div>

    </div>`;
}
questionTemplate(0);
//console.log(questionTemplate);


//render functions


//event listeners