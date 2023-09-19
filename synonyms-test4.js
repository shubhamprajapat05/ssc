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
    createQuestion(1, 'Question 1:', 'Select the most appropriate synonym of the given word: Adulation.', ['A. Admiration', 'B. Disapproval', 'C. Indifference', 'D. Hatred'], 0),
    createQuestion(2, 'Question 2:', 'Select the most appropriate synonym of the given word: Apprehensive.', ['A. Fearful', 'B. Confident', 'C. Careless', 'D. Optimistic'], 0),
    createQuestion(3, 'Question 3:', 'Select the most appropriate synonym of the given word: Bumbling.', ['A. Intelligent', 'B. Skilled', 'C. Clumsy', 'D. Agile'], 2),
    createQuestion(4, 'Question 4:', 'Select the most appropriate synonym of the given word: Cunning.', ['A. Intelligent', 'B. Foolish', 'C. Deceitful', 'D. Honest'], 2),
    createQuestion(5, 'Question 5:', 'Select the most appropriate synonym of the given word: Debatable.', ['A. Certain', 'B. Uncertain', 'C. Obvious', 'D. Undisputed'], 1),
    createQuestion(6, 'Question 6:', 'Select the most appropriate synonym of the given word: Eloquent.', ['A. Persuasive', 'B. Unconvincing', 'C. Silent', 'D. Hesitant'], 0),
    createQuestion(7, 'Question 7:', 'Select the most appropriate synonym of the given word: Ethereal.', ['A. Monstrous', 'B. Earthly', 'C. Ugly', 'D. Heavenly'], 3),
    createQuestion(8, 'Question 8:', 'Select the most appropriate synonym of the given word: Fanciful.', ['A. Imaginative', 'B. Boring', 'C. Realistic', 'D. Practical'], 0),
    createQuestion(9, 'Question 9:', 'Select the most appropriate synonym of the given word: Gloomy.', ['A. Dark', 'B. Bright', 'C. Cheerful', 'D. Happy'], 0),
    createQuestion(10, 'Question 10:', 'Select the most appropriate synonym of the given word: Hesitant.', ['A. Confident', 'B. Uncertain', 'C. Sure', 'D. Doubtful'], 1),
    createQuestion(11, 'Question 11:', 'Select the most appropriate synonym of the given word: Imaginative.', ['A. Creative', 'B. Unoriginal', 'C. Boring', 'D. Dull'], 0),
    createQuestion(12, 'Question 12:', 'Select the most appropriate synonym of the given word: Immense.', ['A. Small', 'B. Huge', 'C. Tiny', 'D. Little'], 1),
    createQuestion(13, 'Question 13:', 'Select the most appropriate synonym of the given word: Ingenious.', ['A. Clever', 'B. Stupid', 'C. Unintelligent', 'D. Incompetent'], 0),
    createQuestion(14, 'Question 14:', 'Select the most appropriate synonym of the given word: Intricate.', ['A. Easy', 'B. Simple', 'C. Complex', 'D. Straightforward'], 2),
    createQuestion(15, 'Question 15:', 'Select the most appropriate synonym of the given word: Jovial.', ['A. Happy', 'B. Sad', 'C. Angry', 'D. Gloomy'], 0),
    createQuestion(16, 'Question 16:', 'Select the most appropriate synonym of the given word: Keen.', ['A. Dull', 'B. Sharp', 'C. Blunt', 'D. Pointless'], 1),
    createQuestion(17, 'Question 17:', 'Select the most appropriate synonym of the given word: Lethargy.', ['A. Diligence', 'B. Energy', 'C. Activity', 'D. Laziness'], 3),
    createQuestion(18, 'Question 18:', 'Select the most appropriate synonym of the given word: Meticulous.', ['A. Careful', 'B. Sloppy', 'C. Reckless', 'D. Careless'], 0),
    createQuestion(19, 'Question 19:', 'Select the most appropriate synonym of the given word: Lucid.', ['A. Murky', 'B. Clear', 'C. Dim', 'D. Dumb'], 1),
    createQuestion(20, 'Question 20:', 'Select the most appropriate synonym of the given word: Naive.', ['A. Innocent', 'B. Experienced', 'C. Cunning', 'D. Deceitful'], 0),
    createQuestion(21, 'Question 21:', 'Select the most appropriate synonym of the given word: Obstinate.', ['A. Flexible', 'C. Stubborn', 'C. Open-minded', 'D. Easygoing'], 1),
    createQuestion(22, 'Question 22:', 'Select the most appropriate synonym of the given word: Optimistic.', ['A. Hopeful', 'B. Pessimistic', 'C. Realistic', 'D. Cynical'], 0),
    createQuestion(23, 'Question 23:', 'Select the most appropriate synonym of the given word: Perplexed.', ['A. Understanding', 'B. Clear', 'C. Confused', 'D. Intelligent'], 2),
    createQuestion(24, 'Question 24:', 'Select the most appropriate synonym of the given word: Persevering.', ['A. Persistent', 'B. Giving up easily', 'C. Lazy', 'D. Careless'], 0),
    createQuestion(25, 'Question 25:', 'Select the most appropriate synonym of the given word: Pessimistic.', ['A. Hopeful', 'B. Optimistic', 'C. Realistic', 'D. Gloomy'], 3),
    createQuestion(26, 'Question 26:', 'Select the most appropriate synonym of the given word: Philanthropic.', ['A. Stingy', 'B. Generous', 'C. Selfish', 'D. Greedy'], 1),
    createQuestion(27, 'Question 27:', 'Select the most appropriate synonym of the given word: Precise.', ['A. Accurate', 'B. Vague', 'C. Ambiguous', 'D. Inaccurate'], 0),
    createQuestion(28, 'Question 28:', 'Select the most appropriate synonym of the given word: Profound.', ['A. Simple', 'B. Shallow', 'C. Deep', 'D. Easy'], 2),
    createQuestion(29, 'Question 29:', 'Select the most appropriate synonym of the given word: Prudent.', ['A. Wise', 'B. Foolish', 'C. Reckless', 'D. Careless'], 0),
    createQuestion(30, 'Question 30:', 'Select the most appropriate synonym of the given word: Quaint.', ['A. Trendy', 'B. Modern', 'C. Stylish', 'D. Old-fashioned'], 3),
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