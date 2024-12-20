const questions = [
    {
        question: "What does HTML stand for?",
        options: ["HyperLinks and text markup language", "Home tool language", "Hyper text markup language"],
        correctAnswer: "False"
    },
    {
        question: "Which type of javascript language is?",
        options: ["Programming", "Object-based", "Data type"],
        correctAnswer: "Object-based"
    },
    {
        question: "The latest HTML standard is:?",
        options: ["XML", "HTML 4.0", "HTML 5.0"],
        correctAnswer: "HTML 5.0"
    },
    {
        question: "The stylesheet file will not be loaded by the browser if you omit_______?",
        options: ["Rel", "Body", "Style", "Html"],
        correctAnswer: "Rel"
    },
    {
        question: " Which of the following is NOT a programming language used for web development??",
        options: ["Html", "Css", "Javascript", "Python"],
        correctAnswer: "Python"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;                                                                       

function loadQuestion() {
    const currentQ = questions[currentQuestion];

    document.getElementById("question").innerText = currentQ.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';
    currentQ.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => answerQuestion(option);
        optionsContainer.appendChild(button);
    });
    // Start the timer for this question
    document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
    timeLeft = 10;  // Reset time left
    clearInterval(timer); // Clear previous timer
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        nextQuestion();
    }
}

function answerQuestion(answer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (answer === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert('Wrong!');
    }
    clearInterval(timer); // Stop the timer when answered
    document.getElementById("score").innerText = `Score: ${score}`;
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Finished!";
        document.getElementById("options").innerHTML = '';
        document.getElementById("timer").innerText = '';
    }
}

// Initialize the quiz
loadQuestion();