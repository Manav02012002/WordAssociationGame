const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const question = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 2
    },
    {
        quiz: ['close', 'nearby', 'next'],
        options: ['trace', 'adjacent'],
        correct: 2
    },
    {
        quiz: ['foreign', 'national', 'ethnic'],
        options: ['mad', 'exotic'],
        correct: 2
    },
    {
        quiz: ['assume', 'insight', 'weather'],
        options: ['forecast', 'sustainable'],
        correct: 1
    },
    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['charity', 'rapid'],
        correct: 2
    }
]

let score = 0
scoreDisplay.textContent = score

function populateQuestions(){
    question.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        questionBox.innerHTML = 'box!'
        questionDisplay.append(questionBox)

    })
}

populateQuestions()