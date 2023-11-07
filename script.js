// Basic calculator functions
const add = (first, second) => {
    return first + second
}

const subtract = (first, second) => {
    return first - second
}

const multiply = (first, second) => {
    return first * second
}

const divide = (first, second) => {
    return first / second
}

// Variables to show
let firstNumber = 1
let operator = "+"
let secondNumber = 1

// Creating functionality
const evaluate = (firstNumber, operator, secondNumber) => {
    if (operator === "+") {
        return add(firstNumber, secondNumber)
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber)
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber)
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber)
    }
}

const calculatorScreen = document.querySelector(".calculator-screen")
const button = document.querySelectorAll("button")
let display = []

const click = [...button].forEach((button) => 
    button.addEventListener('click', (e) => {
        if (e.target.textContent === "CLEAR") {
            calculatorScreen.innerHTML = 0
            display = []
        } else {
            calculatorScreen.innerHTML += e.target.textContent
            display.push(e.target.textContent)
            console.log(display)
        }
        
}))

