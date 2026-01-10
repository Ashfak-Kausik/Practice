function add(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
    return a+b;
    } return NaN;
}

console.log(add(5, 10));

function sub(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
    return a- b;
    } return NaN;
}

console.log(sub(10, 5));

function mul(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
    return a * b;
    } return NaN;
}

console.log(mul(5, 10));