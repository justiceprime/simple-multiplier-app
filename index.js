const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
let score = JSON.parse(localStorage.getItem("score"));

const scoreEl = document.getElementById("score")
scoreEl.innerText = `score: ${score}`

if (!score) {
    score = 0
}

const questionEl = document.getElementById("question")
questionEl.innerText = `what is ${num1} multiplied by ${num2}`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++
        updateLocalStorage()
    }else {
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}



