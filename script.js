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
let placeholderNumber = []



const click = [...button].forEach((button) => 
    button.addEventListener('click', (e) => {
        if (e.target.textContent === "CLEAR") {
            calculatorScreen.innerHTML = ""
            display = []
            placeholderNumber = []
        } else if (isNaN(e.target.textContent)) {
            // If we already have an operator, we will only add the number
            if (display.length >= 2) {
                // At this point, we should show the result of the calculation
                display.push(parseInt(placeholderNumber.join("")))
                let firstNumber = display[0]
                let operator = display[1]
                let secondNumber = display[2]
                let result = evaluate(firstNumber, operator, secondNumber)
                if (e.target.textContent === "=") {
                    display = [result]
                    calculatorScreen.innerHTML = result
                } else {
                    display = [result, e.target.textContent]
                    calculatorScreen.innerHTML = result + "" + e.target.textContent
                }
                
            } else {
                if (placeholderNumber.length === 0) {
                    display.push(e.target.textContent)
                } else {
                    display.push(parseInt(placeholderNumber.join("")), e.target.textContent)
                }
                
                calculatorScreen.innerHTML += e.target.textContent
            }
            // Either way the placeholder should be emptied
            placeholderNumber = []

        } else {
            calculatorScreen.innerHTML += e.target.textContent
            placeholderNumber.push(e.target.textContent)
        }

        console.log(display)
        console.log(placeholderNumber)
        
}))


