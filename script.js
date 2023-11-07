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



