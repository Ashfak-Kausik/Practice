let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

let height = 5.8;
console.log(height >= 6 ? "Tall" : "Short");

let a, b;
b = (a = (20 + 20) * 2) > (3 ** 2);
console.log(a); // -> 60
console.log(b); // -> true
