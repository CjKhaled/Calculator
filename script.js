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

// Populating display
const calculatorScreen = document.querySelector(".calculator-screen")
const button = document.querySelectorAll("button")
let display = []

const click = [...button].forEach((button) => 
    button.addEventListener('click', (e) => {
        if (e.target.textContent === "CLEAR") {
            calculatorScreen.innerHTML = ""
            display = []
        } else if (e.target.textContent === "=") {
            const operation = display.findIndex((number) => isNaN(number))
            const firstNumber = display.slice(0, operation).join("")
            const secondNumber = display.slice(operation + 1).join("")
            const result = evaluate(parseInt(firstNumber), display[operation], parseInt(secondNumber))
            calculatorScreen.innerHTML = result
            display = []
        } else {
            calculatorScreen.innerHTML += e.target.textContent
            display.push(e.target.textContent)
        }
        
}))


