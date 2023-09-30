/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */


function add(number1, number2) {
    return number1 + number2;
    
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    return add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", () => document.querySelector("#sum").value = addNumbers())

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
  return number1 - number2;
};

function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    return subtractNumber1 - subtractNumber2;
}
document.querySelector("#subtractNumbers").addEventListener("click",() => document.querySelector("#difference").value = subtractNumbers())

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers() {
  let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    return factor1 * factor2;

}
document.querySelector("#multiplyNumbers").addEventListener("click", () => document.querySelector("#product").value = multiplyNumbers());



/* Open Function Use - Divide Numbers */
const divide = function (number1, number2) {
  return number1 / number2;
};

function divideNumbers() {
  let dividend = Number(document.querySelector("#dividend").value);
  let divisor = Number(document.querySelector("#divisor").value);
    return dividend / divisor;
}
document.querySelector("#divideNumbers").addEventListener("click", () => document.querySelector("#quotient").value = divideNumbers())
  /* Decision Structure */
  function calculateTotalDue() {
    let subtotal = Number(document.querySelector("#subtotal").value);
    let isMember = document.querySelector("#member").checked;

    let totalDue = isMember ? subtotal * 0.9 : subtotal;

    document.querySelector("#total").textContent = `$${totalDue.toFixed(2)}`;
  };


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = numbersArray;
/* Output Odds Only Array */
let oddNumbers = numbersArray.filter((num) => num % 2 !== 0);
document.querySelector("#odds").textContent = oddNumbers;
/* Output Evens Only Array */
let evenNumbers = numbersArray.filter((num) => num % 2 === 0);
document.querySelector("#evens").textContent = evenNumbers;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.querySelector("#sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map((num) => num * 2);
document.querySelector("#multiplied").textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce((acc, curr) => acc + curr, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;

function displayCurrentYear() {
  let currentYear = new Date().getFullYear();
  document.querySelector("#year").textContent = currentYear;
}

