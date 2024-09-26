const flashcards = [
    { question: "What is the capital of France?  a)france, b)paris, c)italy, d)rome", answer: "Paris" },
    { question: "What is 2 + 2?  a)1, b)2, c)4, d)5", answer: "4" },
    { question: "What is the capital of Canada? A) Toronto,B) Ottawa,C) Vancouver,D) Montreal",answer:"Ottawa" },
    { question: "Which planet is known as the Red Planet? A) Venus,B) Mars,C) Jupite,D) Saturn",answer:"Mars" },
    { question: "What is the chemical symbol for gold? A) Au,B) Ag,C) Pb,D) Fe",answer:"Au" },
    { question: "Which part of the cell contains the genetic material? A) Mitochondria,B) Ribosome,C) Nucleus,D) Endoplasmic Reticulum",answer:"Nucleus" },
    { question: " What is the speed of light in a vacuum? A) 300,000 km/s,B) 150,000 km/s,C) 100,000 km/s,D) 200,000 km/s",answer:"300,000 km/s" },
    { question: "Which river is the longest in the world? A) Amazon,B) Nile,C) Yangtze,D) Mississippi",answer:"Nile" },
    { question: "Mount Everest is located in which mountain range? A) Rockies,B) Andes,C) Alps,D) Himalayas",answer:"Himalayas" },
    { question: "Which country has the most islands? A) Sweden,B) Canada,C) Norway,D) Greece",answer:"Canada" },
    { question: "Who was the first President of the United States? A) Thomas Jefferson,B) Abraham Lincoln,C) George Washington,D) John Adams",answer:"George Washington" },
    { question: "In which year did the Titanic sink? A) 1912,B) 1905,C) 1923,D) 1898",answer:"1912" },
    { question: "Which ancient civilization built the pyramids of Giza? A) Greeks,B) Romans,C) Egyptians,D) Mayans",answer:"Egyptians" },
];

let currentCardIndex = -1;

function showCard(index) {
    const card = flashcards[index];
    document.getElementById('question').innerText = card.question;
    document.getElementById('answer').value = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = flashcards[currentCardIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Correct! 🎉");
    } else {
        alert(`Incorrect. The correct answer was: ${flashcards[currentCardIndex].answer}`);
    }
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showCard(currentCardIndex);
}

// Initialize the app
document.getElementById('check-button').addEventListener('click', checkAnswer);
document.getElementById('next-button').addEventListener('click', nextCard);

// Show the first card
nextCard();
