let names = [];
let isOver = false;

while (!isOver) {
    let name = prompt("Enter a name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}

for (let i = 0; i < names.length; i++) {
    console.log(`Name ${i + 1}: ${names[i]}`);
} 

let numbers = [10, 20, 50, 100, 40, 90];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = numbers.length - 1; i--;) {
    console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i+=2) {
    console.log(numbers[i]);
}