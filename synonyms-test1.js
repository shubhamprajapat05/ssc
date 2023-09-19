// Define a function to create a question object
function createQuestion(id, questionnum, question, options, correctAnswerIndex) {
    return {
        id,
        questionnum,
        question,
        options,
        correctAnswerIndex,
        userAnswer: null, // Initialize user answer as null
    };
}

// Create an array of questions
const questions = [
    createQuestion(1, 'Question 1:', 'Select the most appropriate synonym of the given word: Ban.', ['A. Ascertain', 'B. Band', 'C. Prohibit', 'D. Abandon'], 2),
    createQuestion(2, 'Question 2:', 'Select the most appropriate synonym of the given word: Abut.', ['A. Nullify', 'B. Catastrophe', 'C. Adjoin', 'D. Mourn'], 2),
    createQuestion(3, 'Question 3:', 'Select the most appropriate synonym of the given word: Pathetic.', ['A. Fame', 'B. Purposeless', 'C. Astound', 'D. Moving'], 3),
    createQuestion(4, 'Question 4:', 'Select the most appropriate synonym of the given word: Jubilant.', ['A. Apprentice', 'B. Elated', 'C. Scoundrel', 'D. Copious'], 1),
    createQuestion(5, 'Question 5:', 'Select the most appropriate synonym of the given word: Effete.', ['A. Exhausted', 'B. Deserved', 'C. Kind', 'D. Diligent'], 0),
    createQuestion(6, 'Question 6:', 'Select the most appropriate synonym of the given word: Banish.', ['A. Uncivilized', 'B. Fretful', 'C. Exile', 'D. Acknowledge'], 2),
    createQuestion(7, 'Question 7:', 'Select the most appropriate synonym of the given word: Furbish.', ['A. Exemption', 'B. Polish', 'C. Compress', 'D. Imaginative'], 1),
    createQuestion(8, 'Question 8:', 'Select the most appropriate synonym of the given word: Cajole.', ['A. Wandering', 'B. Generous', 'C. Persuade', 'D. Inform'], 2),
    createQuestion(9, 'Question 9:', 'Select the most appropriate synonym of the given word: Zenith.', ['A. Perspicacious', 'B. Peak', 'C. Reflect', 'D. Helper'], 1),
    createQuestion(10, 'Question 10:', 'Select the most appropriate synonym of the given word: Thrive.', ['A. Remark', 'B. Apprentice', 'C. Flourish', 'D. Scoundrel'], 2),
    createQuestion(11, 'Question 11:', 'Select the most appropriate synonym of the given word: Denounce.', ['A. Delight', 'B. Accuse', 'C. Zenith', 'D. Coax'], 1),
    createQuestion(12, 'Question 12:', 'Select the most appropriate synonym of the given word: Ingenuous.', ['A. Chicane', 'B. Inform', 'C. Artless', 'D. Partner'], 2),
    createQuestion(13, 'Question 13:', 'Select the most appropriate synonym of the given word: Constant.', ['A. Eternal', 'B. Agile', 'C. Clever', 'D. Accede'], 0),
    createQuestion(14, 'Question 14:', 'Select the most appropriate synonym of the given word: Lethargy.', ['A. Sluggishness', 'B. Frivolous', 'C. Laziness', 'D. Peerless'], 2),
    createQuestion(15, 'Question 15:', 'Select the most appropriate synonym of the given word: Scanty.', ['A. Meagre', 'B. Brief', 'C. Acquire', 'D. Nostalgic'], 0),
    createQuestion(16, 'Question 16:', 'Select the most appropriate synonym of the given word: Resistance.', ['A. Equivalent', 'B. Denunciation', 'C. Instigate', 'D. Opposition'], 3),
    createQuestion(17, 'Question 17:', 'Select the most appropriate synonym of the given word: Abhor.', ['A. Silly', 'B. Hate', 'C. Celebrate', 'D. Pleasure'], 1),
    createQuestion(18, 'Question 18:', 'Select the most appropriate synonym of the given word: Ferocious.', ['A. Depor', 'B. Savage', 'C. Touching', 'D. Calamity'], 1),
    createQuestion(19, 'Question 19:', 'Select the most appropriate synonym of the given word: Fury.', ['A. Prevent', 'B. Impudent', 'C. Anger', 'D. Errant'], 2),
    createQuestion(20, 'Question 20:', 'Select the most appropriate synonym of the given word: Contingent.', ['A. Proportionate', 'B. Liable', 'C. Confidant', 'D. Trustworthy'], 1),
    createQuestion(21, 'Question 21:', 'Select the most appropriate synonym of the given word: Inanimate.', ['A. Dormant', 'B. Lifeless', 'C. Suffering', 'D. Implore'], 1),
    createQuestion(22, 'Question 22:', 'Select the most appropriate synonym of the given word: Destitute.', ['A. Errant', 'B. Proportionate', 'C. Needy', 'D. Confidant'], 2),
    createQuestion(23, 'Question 23:', 'Select the most appropriate synonym of the given word: Irresolute.', ['A. Undecided', 'B. Canny', 'C. Succor', 'D. Cheerful'], 0),
    createQuestion(24, 'Question 24:', 'Select the most appropriate synonym of the given word: Indignant.', ['A. Naive', 'B. Angry', 'C. Suffering', 'D. Catastrophe'], 1),
    createQuestion(25, 'Question 25:', 'Select the most appropriate synonym of the given word: Entice.', ['A. Lure', 'B. Faithful', 'C. Fixed', 'D. Detest'], 0),
    createQuestion(26, 'Question 26:', 'Select the most appropriate synonym of the given word: Pious.', ['A. Herald', 'B. Religious', 'C. Defame', 'D. Reflect'], 1),
    createQuestion(27, 'Question 27:', 'Select the most appropriate synonym of the given word: Dilate.', ['A. Spin', 'B. Weaken', 'C. Widen', 'D. Push'], 2),
    createQuestion(28, 'Question 28:', 'Select the most appropriate synonym of the given word: Abrogate.', ['A. Elope', 'B. Gate-crash', 'C. Abolish', 'D. Destroy'], 2),
    createQuestion(29, 'Question 29:', 'Select the most appropriate synonym of the given word: Command.', ['A. Lead', 'B. Instruction', 'C. Manage', 'D. Supervise'], 1),
    createQuestion(30, 'Question 30:', 'Select the most appropriate synonym of the given word: Motive.', ['A. Reason', 'B. Occasion', 'C. Intention', 'D. Preparation'], 2),
];

let currentQuestionIndex = 0; // Initialize with the first question

// Function to display the current question
function displayCurrentQuestion() {
    const question = questions[currentQuestionIndex];
    const questionDisplay = document.getElementById('question-display');
    questionDisplay.innerHTML = ''; // Clear the previous question

    // Create question elements
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    const questionText = document.createElement('p');
    questionText.textContent = `${question.questionnum}\n${question.question}`;
    questionElement.appendChild(questionText);

    const optionsList = document.createElement('ul');
    question.options.forEach((option, index) => {
        const optionItem = document.createElement('li');
        const optionLabel = document.createElement('label');
        optionLabel.innerHTML = `
            <input 
                type="radio" 
                name="question${question.id}" 
                value="${index}" 
                onclick="toggleAnswer(${question.id}, ${index})"
                ${question.userAnswer === index ? 'checked' : ''}
            >
            ${option}
        `;
        optionItem.appendChild(optionLabel);
        optionsList.appendChild(optionItem);
    });
    questionElement.appendChild(optionsList);

    const selectedAnswer = document.createElement('p');
    selectedAnswer.innerHTML = `Selected Answer: <span class="selected-answer" data-question-id="${question.id}" style="display: none">None</span>`;
    questionElement.appendChild(selectedAnswer);

    const correctAnswer = document.createElement('p');
    correctAnswer.innerHTML = `Correct Answer: <span class="correct-answer" data-question-id="${question.id}" style="display: none">${question.options[question.correctAnswerIndex]}</span>`;
    questionElement.appendChild(correctAnswer);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next >';
    nextButton.classList.add('next-button');
    nextButton.addEventListener('click', nextQuestion);
    questionElement.appendChild(nextButton);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('submit-button');
    submitButton.style.display = 'none';
    submitButton.addEventListener('click', submitQuiz);
    questionElement.appendChild(submitButton);

    const prevButton = document.createElement('button');
    prevButton.textContent = '< Previous';
    prevButton.classList.add('prev-button');
    prevButton.addEventListener('click', previousQuestion);
    questionElement.appendChild(prevButton);

    questionDisplay.appendChild(questionElement);

    // Show/hide "Next" and "Submit" buttons
    nextButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
}

// Function to toggle answer selection
function toggleAnswer(questionId, selectedOptionIndex) {
    const question = questions.find((q) => q.id === questionId);

    if (question.userAnswer === selectedOptionIndex) {
        // Clicked option is already selected, so clear the selection
        question.userAnswer = null;
    } else {
        // Toggle the selection
        question.userAnswer = selectedOptionIndex;
    }

    // Show the selected answer element
    const selectedAnswerElement = document.querySelector(`span.selected-answer[data-question-id="${questionId}"]`);
    selectedAnswerElement.textContent = getSelectedAnswer(question);
    selectedAnswerElement.style.display = 'inline';

    // Check if the selected answer is correct and update the style accordingly
    if (question.userAnswer === question.correctAnswerIndex) {
        selectedAnswerElement.style.color = 'green';
        selectedAnswerElement.innerHTML += ' &#10004;'; // Add a green checkmark
    } else {
        selectedAnswerElement.style.color = 'red';

        // Highlight the correct answer in green
        const correctAnswerElement = document.querySelector(`span.correct-answer[data-question-id="${questionId}"]`);
        correctAnswerElement.textContent = question.options[question.correctAnswerIndex];
        correctAnswerElement.style.display = 'inline';
        correctAnswerElement.style.color = 'green';
    }
}

// Function to navigate to the next question
function nextQuestion() {
    // Move to the next question (if available)
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayCurrentQuestion();
    }
}

// Function to navigate to the previous question
function previousQuestion() {
    // Move to the previous question (if available)
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayCurrentQuestion();
    }
}

// Function to display the selected answer
function getSelectedAnswer(question) {
    const selectedOptionIndex = question.userAnswer;
    if (selectedOptionIndex !== null && selectedOptionIndex >= 0) {
        return question.options[selectedOptionIndex];
    } else {
        return 'None';
    }
}

// Function to calculate quiz results and display the popup
function submitQuiz() {
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    // Calculate results
    for (let i = 0; i < questions.length; i++) {
        const userAnswer = questions[i].userAnswer;
        const question = questions[i];

        if (userAnswer === null) {
            unansweredCount++;
        } else if (userAnswer === question.correctAnswerIndex) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    }

    // Display results in the popup
    const correctAnswersElement = document.getElementById('correct-answers');
    const incorrectAnswersElement = document.getElementById('incorrect-answers');
    const unansweredQuestionsElement = document.getElementById('unanswered-questions');

    correctAnswersElement.textContent = correctCount;
    incorrectAnswersElement.textContent = incorrectCount;
    unansweredQuestionsElement.textContent = unansweredCount;

    // Show the popup
    const popup = document.getElementById('quiz-results-popup');
    popup.style.display = 'block';

    // Add an event listener to the "Back to Chapters" button
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function () {
        window.location.href = 'eng-chapters.html'; // Replace with the correct URL
    });
}

// Initialize the application by displaying the first question
function init() {
    displayCurrentQuestion();
}

// Call the init function when the page loads
window.onload = init;
