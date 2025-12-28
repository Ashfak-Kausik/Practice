let message = "Bingo";
let number = prompt("Enter a number between 1 and 100:");

if (number > 90 && number < 110) {
    alert(message);   
} else {
    alert("Miss");
}

(number > 90 && number < 110) ? alert(message) : alert("Miss");
console.log(number);