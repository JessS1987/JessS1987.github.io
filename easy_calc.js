//simple calculator 

//addition function
function sum(num1, num2) {
    return num1 + num2;
}

//subtract function
function subtract(num1, num2) {
    return num1 - num2;
}

//divide function
function divide(num1, num2) {
    return num1 / num2;
}

//multiply function
function multiply(num1, num2) {
    return num1 * num2;
}

//power function
function power(num1, num2) {
    return num1 ** num2;
}

//square root function
function squareRoot(num1, num2) {
   return Math.sqrt(num1);
   return Math.sqrt(num2);
}

let operator = prompt("Enter operator ( either +, -, /, x, power or square root): ");

let num1 = prompt("enter a number");
let num2 = prompt("enter a second number");
num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result;

  if (operator == '+'){
   alert(`${num1} + ${num2} = ${sum(num1, num2)}`)
} else if (operator == "-"){
    alert(`${num1} - ${num2} = ${subtract(num1, num2)}`)
} else if (operator == "/"){
    alert(`${num1} / ${num2} = ${divide(num1, num2)}`)
} else if (operator == "x"){
    alert(`${num1} * ${num2} = ${multiply(num1, num2)}`);
} else if (operator == "power"){
    alert(`The power of ${num1} and ${num2} is ${power(num1,num2)} `);
} else if (operator == "square root"){
   alert (`The square roots of ${num1} and ${num2} are ${Math.sqrt(num1)} and ${Math.sqrt(num2)}`);
} else 
  alert(`uh oh! somethings gone awry!`);
   
