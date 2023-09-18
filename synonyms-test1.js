// Mock database of questions
const questions = [
    {
        id: 1,
        chapter: 'Question 1',
        question: 'Select the most appropriate synonym of the given word: Ban.',
        options: ['A. Ascertain', 'B. Band', 'C. Prohibit', 'D. Abandon'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 2,
        chapter: 'Question 2',
        question: 'Select the most appropriate synonym of the given word: Abut.',
        options: ['A. Nullify', 'B. Catastrophe', 'C. Adjoin', 'D. Mourn'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 3,
        chapter: 'Question 3',
        question: 'Select the most appropriate synonym of the given word: Pathetic.',
        options: ['A. Fame', 'B. Purposeless', 'C. Astound', 'D. Moving'],
        correctAnswerIndex: 3,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 4,
        chapter: 'Question 4',
        question: 'Select the most appropriate synonym of the given word: Jubilant.',
        options: ['A. Apprentice', 'B. Elated', 'C. Scoundrel', 'D. Copious'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 5,
        chapter: 'Question 5',
        question: 'Select the most appropriate synonym of the given word: Effete.',
        options: ['A. Exhausted', 'B. Deserved', 'C. Kind', 'D. Diligent'],
        correctAnswerIndex: 0,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 6,
        chapter: 'Question 6',
        question: 'Select the most appropriate synonym of the given word: Banish.',
        options: ['A. Uncivilised', 'B. Fretful', 'C. Exile', 'D. Acknowledge'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 7,
        chapter: 'Question 7',
        question: 'Select the most appropriate synonym of the given word: Furbish.',
        options: ['A. Exemption', 'B. Polish', 'C. Compress', 'D. Imaginative'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 8,
        chapter: 'Question 8',
        question: 'Select the most appropriate synonym of the given word: Cajole.',
        options: ['A. Wandering', 'B. Generous', 'C. Persuade', 'D. Inform'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 9,
        chapter: 'Question 9',
        question: 'Select the most appropriate synonym of the given word: Zenith.',
        options: ['A. Perspicacious', 'B. Peak', 'C. Reflect', 'D. Helper'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 10,
        chapter: 'Question 10',
        question: 'Select the most appropriate synonym of the given word: Thrive.',
        options: ['A. Remark', 'B. Apprentice', 'C. Flourish', 'D. Scoundrel'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 11,
        chapter: 'Question 11',
        question: 'Select the most appropriate synonym of the given word: Denounce.',
        options: ['A. Delight', 'B. Accuse', 'C. Zenith', 'D. Coax'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 12,
        chapter: 'Question 12',
        question: 'Select the most appropriate synonym of the given word: Ingenuous.',
        options: ['A. Chicane', 'B. Inform', 'C. Artless', 'D. Partner'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 13,
        chapter: 'Question 13',
        question: 'Select the most appropriate synonym of the given word: Constant.',
        options: ['A. Eternal', 'B. Agile', 'C. Clever', 'D. Accede'],
        correctAnswerIndex: 0,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 14,
        chapter: 'Question 14',
        question: 'Select the most appropriate synonym of the given word: Lethargy.',
        options: ['A. Sluggishness', 'B. Frivolous', 'C. Laziness', 'D. Peerless'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 15,
        chapter: 'Question 15',
        question: 'Select the most appropriate synonym of the given word: Scanty.',
        options: ['A. Meagre', 'B. Brief', 'C. Acquire', 'D. Nostalgic'],
        correctAnswerIndex: 0,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 16,
        chapter: 'Question 16',
        question: 'Select the most appropriate synonym of the given word: Resistance.',
        options: ['A. Equivalent', 'B. Denunciation', 'C. Instigate', 'D. Opposition'],
        correctAnswerIndex: 3,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 17,
        chapter: 'Question 17',
        question: 'Select the most appropriate synonym of the given word: Abhor.',
        options: ['A. Silly', 'B. Hate', 'C. Celebrate', 'D. Pleasure'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 18,
        chapter: 'Question 18',
        question: 'Select the most appropriate synonym of the given word: Ferocious.',
        options: ['A. Depor', 'B. Savage', 'C. Touching', 'D. Calamity'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 19,
        chapter: 'Question 19',
        question: 'Select the most appropriate synonym of the given word: Fury.',
        options: ['A. Prevent', 'B. Impudent', 'C. Anger', 'D. Errant'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 20,
        chapter: 'Question 20',
        question: 'Select the most appropriate synonym of the given word: Contingent.',
        options: ['A. Proportionate', 'B. Liable', 'C. Confidant', 'D. Trustworthy'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 21,
        chapter: 'Question 21',
        question: 'Select the most appropriate synonym of the given word: Inanimate.',
        options: ['A. Dormant', 'B. Lifeless', 'C. Suffering', 'D. Implore'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 22,
        chapter: 'Question 22',
        question: 'Select the most appropriate synonym of the given word: Destitute.',
        options: ['A. Errant', 'B. Proportionate', 'C. Needy', 'D. Confidant'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 23,
        chapter: 'Question 23',
        question: 'Select the most appropriate synonym of the given word: Irresolute.',
        options: ['A. Undecided', 'B. Canny', 'C. Succor', 'D. Cheerful'],
        correctAnswerIndex: 0,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 24,
        chapter: 'Question 24',
        question: 'Select the most appropriate synonym of the given word: Indignant.',
        options: ['A. Naive', 'B. Angry', 'C. Suffering', 'D. Catastrophe'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 25,
        chapter: 'Question 25',
        question: 'Select the most appropriate synonym of the given word: Entice.',
        options: ['A. Lure', 'B. Faithful', 'C. Fixed', 'D. Detest'],
        correctAnswerIndex: 0,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 26,
        chapter: 'Question 26',
        question: 'Select the most appropriate synonym of the given word: Pious.',
        options: ['A. Herald', 'B. Religious', 'C. Defame', 'D. Reflect'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 27,
        chapter: 'Question 27',
        question: 'Select the most appropriate synonym of the given word: Dilate.',
        options: ['A. Spin', 'B. Weaken', 'C. Widen', 'D. Push'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 28,
        chapter: 'Question 28',
        question: 'Select the most appropriate synonym of the given word: Abrogate.',
        options: ['A. Elope', 'B. Gate-crash', 'C. Abolish', 'D. Destroy'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 29,
        chapter: 'Question 29',
        question: 'Select the most appropriate synonym of the given word: Command.',
        options: ['A. Lead', 'B. Instruction', 'C. Manage', 'D. Supervise'],
        correctAnswerIndex: 1,
        userAnswer: null  // To store the user's selected answer
    },
    {
        id: 30,
        chapter: 'Question 30',
        question: 'Select the most appropriate synonym of the given word: Motive.',
        options: ['A. Reason', 'B. Occasion', 'C. Intention', 'D. Preparation'],
        correctAnswerIndex: 2,
        userAnswer: null  // To store the user's selected answer
    },
    // Add more questions here
];

let currentQuestionIndex = 0; // Initialize with the first question

// Initialize an array to store user answers, initially filled with null values
const userAnswers = new Array(questions.length).fill(null);

// Function to display the current question
function displayCurrentQuestion() {
    const question = questions[currentQuestionIndex];
    const questionDisplay = document.getElementById('question-display');
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    // Display question, options, and answer selection here
    questionElement.innerHTML = `
    <p>${question.chapter}</p>
    <p>${question.question}</p>
    <ul>
        ${question.options.map((option, index) => `
            <li class="${userAnswers[question.id - 1] === index ? '' : ''}">
                <label>
                    <input 
                        type="radio" 
                        name="question${question.id}" 
                        value="${index}" 
                        onclick="toggleAnswer(${question.id}, this.value)"
                        ${userAnswers[question.id - 1] === index ? 'checked' : ''}
                    >
                    ${option}
                </label>
            </li>
        `).join('')}
    </ul>
    <p>Selected Answer: <span class="selected-answer" data-question-id="${question.id}" style="display: none">None</span></p>
    <p>Correct Answer: <span class="correct-answer" data-question-id="${question.id}" style="display: none">${question.options[question.correctAnswerIndex]}</span></p>
    <button class="next-button" onclick="nextQuestion()">Next ></button>
    <button class="submit-button" onclick="submitQuiz()" style="display: none;">Submit</button>
    <button class="prev-button" onclick="previousQuestion()">< Previous</button>
`;

    questionDisplay.innerHTML = ''; // Clear the previous question
    questionDisplay.appendChild(questionElement);


    // Hide the "Next" button on the last question and show the "Submit" button
    const nextButton = document.querySelector('.next-button');
    const submitButton = document.querySelector('.submit-button');
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    }
}

// Function to toggle answer selection
function toggleAnswer(questionId, selectedOptionIndex) {
    userAnswers[questionId - 1] = selectedOptionIndex; // Update the user's selected answer
    const question = questions.find((q) => q.id === questionId);

    if (question.userAnswer === selectedOptionIndex) {
        // Clicked option is already selected, so clear the selection
        question.userAnswer = null;
        document.querySelector(`input[type="radio"][name="question${question.id}"][value="${selectedOptionIndex}"]`).checked = false;
    } else {
        // Toggle the selection
        question.userAnswer = selectedOptionIndex;
    }

    // Show the selected answer element
    const selectedAnswerElement = document.querySelector(`span.selected-answer[data-question-id="${questionId}"]`);
    selectedAnswerElement.textContent = getSelectedAnswer(question);
    selectedAnswerElement.style.display = 'inline';

    // Check if the selected answer is correct and update the style accordingly
    if (question.userAnswer == question.correctAnswerIndex) {
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

// Initialize the application by displaying the first question
function init() {
    displayCurrentQuestion();
}


// Call the init function when the page loads
window.onload = init;