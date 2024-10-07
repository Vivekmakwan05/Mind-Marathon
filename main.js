
const quizData = [
   {
      question: "What does CSS stand for?",
      options: [
         "Creative Style Sheets",
         "Cascading Style Sheets",
         "Colorful Style Sheets",
         "Computer Style Sheets",
      ],
      correct: 1,
   },
   {
      question: "Which CSS property is used to change the text color of an element?",
      options: [
         "color",
         "text-color",
         "font-color",
         "background-color",
      ],
      correct: 0,
   },
   {
      question: "In JavaScript, which of the following is used to declare a variable?",
      options: [
         "var",
         "const",
         "let",
         "All of the above",
      ],
      correct: 3,
   },
   {
      question: "Which of the following is a JavaScript library for building user interfaces?",
      options: [
         "Angular",
         "Bootstrap",
         "React",
         "Vue",
      ],
      correct: 2,
   },
   {
      question: "Which CSS property is used to make the text bold?",
      options: [
         "text-style",
         "text-weight",
         "font-style",
         "font-weight",
      ],
      correct: 3,
   },
];

const quiz = document.getElementById("quize");
const scores = document.querySelector(".score");

const ansEle = document.querySelectorAll(".ans");
const [questionEle, option_1, option_2, option_3, option_4] = document.querySelectorAll(" #question, .option_1, .option_2, .option_3, .option_4 ");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const loadquiz = () => {
   const { question, options } = quizData[currentQuiz];

   questionEle.innerText = `${currentQuiz + 1}: ${question}`;
   scores.innerText = ` Score: ${score}/${quizData.length} `;

   options.forEach(
      (currentoption, index) => (window[`option_${index + 1}`].innerText = currentoption)
   );
};

loadquiz();

const getselectedOption = () => {

   let ansElement = Array.from(ansEle);
   return ansElement.findIndex((currentEle) => currentEle.checked);
};

const deselectedAns = () => {
   return ansEle.forEach((currentEle) => (currentEle.checked = false));
}

submitBtn.addEventListener('click', () => {
   const selectedOptionIndex = getselectedOption();
   console.log(selectedOptionIndex);

   if(selectedOptionIndex === quizData[currentQuiz].correct){
      score = score + 1;
   }

   currentQuiz++;

   if (currentQuiz < quizData.length) {
      deselectedAns();
      loadquiz();
   }
   else{
      quiz.innerHTML = `
      <div class="showR">
        <h3><i class="fa-solid fa-award"></i></h3>
        <h4> 🏆 Your Score: ${score}/${quizData.length} Correct Answer </h4>
        <p>Congratulations on completing the quize!🎉 </p>
        <button class="btn" onclick="location.reload()">Play Again</button>
      </div>`
   }
});
