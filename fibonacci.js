let fibonacci = (n) => {
    if (!Number.isInteger(n) || n < 0) return NaN;
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

console.log(fibonacci(10)); // -> 55
console.log(fibonacci(0)); // -> 0
console.log(fibonacci(1)); // -> 1
console.log(fibonacci(-5)); // -> NaN
console.log(fibonacci(5.5)); // -> NaN
console.log(fibonacci(4)); // -> 3
console.log(fibonacci(7)); // -> 13
console.log(fibonacci("15")); // -> NaN