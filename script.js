const quizQuestions = [
	{
		question: "What is Chewbacca's weapon of choice?",
            a: "Blaster",
			b: "Lightsaber",
			c: "Club",
			d: "Bowcaster",
		correct: "d",
	},
	{
		question:
			"What is the name of the Sith Lord that has a double-blade lightsaber?",
			a: "Darth Maul",
			b: "Darth Vader",
			c: "Darth Saul",
			d: "Darth Garth",
		correct: "a",
	},
	{
		question: "What was Star Wars almost called instead?",
			a: "Star Battles",
			b: "Adventures of Luke Starkiller",
			c: "Adventures of the Jedi",
			d: "Battles in Space",
		correct: 'b',
	},
	{
		question: "Who almost played Han Solo but turned down the role?",
			a: "Mel Gibson",
			b: "Dustin Hoffman",
			c: "Al Pacino",
			d: "Robert De Niro",
		correct: "c",
	},
	{
		question: "In what year the original Star Wars film was first released?",
			a: "1970",
			b: "1977",
			c: "1980",
			d: "1982",
		correct: "b",
	},
	{
		question: "Who is the creator of the Star Wars series?",
			a: "Quentin Tarantino",
			b: "Alfred Hitchcock",
			c: "Steven Spielberg",
			d: "George Lucas",
		correct: "d",
	},
	{
		question: "Luke Skywalker was raised on which planet?",
			a: "Tatooine",
			b: "Naboo",
			c: "Alderaan",
			d: "Hoth",
		correct: "a",
	},
	{
		question: "Who built C-3P0?",
			a: "Jabba the Hutt",
			b: "Anakin Skywalker",
			c: "Ewoks",
			d: "Lando Calrissian",
		correct: "b",
	},
	{
		question: "Before being captured, what did Princess Leia send off with R2-D2?",
			a: "A superweapon",
			b: "Blueprints",
			c: "A lightsaber",
			d: "A letter",
		correct: "b",
    },
	{
		question: "What ship does Han Solo fly?",
			a: "Star Destroyer",
			b: "C3PO",
			c: "Millenium Falcon",
			d: "TIE Fighter",
		correct: "c",
	},
	
];
const quiz = document.getElementById('quiz-app')
const answerOpt = document.querySelectorAll('.answer')
const questionOpt = document.getElementById('questionaire')
const a_text = document.getElementById('a_answer')
const b_text = document.getElementById('b_answer')
const c_text = document.getElementById('c_answer')
const d_text = document.getElementById('d_answer')
const submitBtn = document.getElementById('submit')
let currentQuestion = 0
let score = 0
loadQuestion()
function loadQuestion(){
    deselectAnswers()
    const currentQuestionData = quizQuestions[currentQuestion]
    questionOpt.innerText = currentQuestionData.question
    a_text.innerText = currentQuestionData.a
    b_text.innerText = currentQuestionData.b
    c_text.innerText = currentQuestionData.c
    d_text.innerText = currentQuestionData.d
}
function deselectAnswers(){
    answerOpt.forEach(answerEL => answerEL.checked = false)
}

function getSelectedOpt(){
    let answer
    answerOpt.forEach(answerEL => {
        if(answerEL.checked) {
            answer = answerEL.id
        }
    })
    return answer
}

// If the selected answer is equal to the current quiz answe, increase score by 1
submitBtn.addEventListener('click', () => {
    const answer = getSelectedOpt()
    if(answer) {
        if(answer === quizQuestions[currentQuestion].correct){
            score++
        }
        currentQuestion++
        if(currentQuestion < quizQuestions.length){
            loadQuestion()
        } else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizQuestions.length} questions correctly!</h2>
            <button class="btn" onclick ="location.reload()">Reload</button>`
        }
    }
})