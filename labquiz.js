let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
let even = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        even.push(number);
    }
}

console.log("Even numbers:");
console.log(even);