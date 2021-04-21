const questionEl = document.getElementById('question');
const quizEnd = document.querySelector('.quiz-container')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

const quizData = [
 {
  question: "What is my favorite programing language?",
  a: "Java",
  b: "Python",
  c: "C++",
  d: "JavaScript",
  correct: "b"
 },
 {
  question: "What is the national day of Sweden?",
  a: "May 4th",
  b: "June 6th",
  c: "October 24th",
  d: "December 1st",
  correct: "b"
 },
 {
  question: "How old am I?",
  a: "27",
  b: "29",
  c: "31",
  d: "33",
  correct: "d"
 }
]

let currentQuestion = 0;
let numberOfCorrects = 0;

loadQuiz();

function loadQuiz() {
   questionEl.innerHTML = quizData[currentQuestion].question;
   a_text.innerHTML = quizData[currentQuestion].a;
   b_text.innerHTML = quizData[currentQuestion].b;
   c_text.innerHTML = quizData[currentQuestion].c;
   d_text.innerHTML = quizData[currentQuestion].d;
}

const answers = document.querySelectorAll('.answer');

submitBtn.addEventListener('click', () => {
   const answer = getSelected();
   if (answer) {
      if (answer === quizData[currentQuestion].correct) {
         numberOfCorrects++;
      }
      currentQuestion++;

      refreshList();

      if (currentQuestion < quizData.length) {
      loadQuiz();
      } else {
         quizEnd.innerHTML = `<h2>Congratulations! You got ${numberOfCorrects} out of ${quizData.length} right!</h2> <button onClick="location.reload()">Reload</button>`;
      }
   } else {
   alert('Must pick an alternative!');
}
})

function getSelected() {
   let answer = undefined;
   answers.forEach(ans => {
      if (ans.checked) {
         answer = ans.id;
      }
   })
   return answer;
}

function refreshList() {
   answers.forEach(item => {
      item.checked = false;
   })
}