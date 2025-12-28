let number1 = prompt("Enter first number:");
let number2 = prompt("Enter second number:");
let operator = prompt("Enter an operator (+, -, *, /):");

if (operator === "+") {
    let result = parseFloat(number1) + parseFloat(number2);
    console.log(`The result of ${number1} + ${number2} is: ${result}`); 
} else if (operator === "-") {
    let result = parseFloat(number1) - parseFloat(number2);
    console.log(`The result of ${number1} - ${number2} is: ${result}`); 
} else if (operator === "*") {
    let result = parseFloat(number1) * parseFloat(number2);
    console.log(`The result of ${number1} * ${number2} is: ${result}`); 
} else if (operator === "/") {
    if (parseFloat(number2) !== 0) {
        let result = parseFloat(number1) / parseFloat(number2);
        console.log(`The result of ${number1} / ${number2} is: ${result}`); 
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
} else {
    console.log("Error: Invalid operator. Please use one of +, -, *, /.");
}