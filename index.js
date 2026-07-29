let number1El = document.getElementById("number1-el")
let number2El = document.getElementById("number2-el")

let count1 = 0
let count2 = 0

function one() {
    count1 += 1
    number1El.textContent = count1
}

function two() {
    count1 += 2
    number1El.textContent = count1
}

function three() {
    count1 += 3
    number1El.textContent = count1
}

function one2() {
    count2 += 1
    number2El.textContent = count2
}

function two2() {
    count2 += 2
    number2El.textContent = count2
}

function three2() {
    count2 += 3
    number2El.textContent = count2
}