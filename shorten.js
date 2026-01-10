let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mul = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

console.log(add(5, 10));
console.log(sub(10, 5));
console.log(mul(5, 10.1));

let action = (callback, a, b) => callback(a, b); 

console.log(action(add, 5, 10));
console.log(action(sub, 10, 5));
console.log(action(mul, 5, 10.1));


let count = 1;

const timerId = setInterval(() => {
    console.log(count);
    count++;
}, 2000);

setTimeout(() => {
    clearInterval(timerId);
}, 20000);