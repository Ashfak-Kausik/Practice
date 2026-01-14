function division(a, b) {
    if (b === 0) {
        throw new RangeError("Error: Division by zero");
    }
    return a/b;
}

console.log(division(10, 2)); // -> 5
console.log(division(15, 3)); // -> 5
console.log(division(9, 0)); // -> Uncaught RangeError: Error: Division by zero


let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i <= numbers.length; i++) {
    let result;
    try {
        result = division(100, numbers[i]);
    } catch (e) {
        result = e.message;
    }
    console.log(result);
}