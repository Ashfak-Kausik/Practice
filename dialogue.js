function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)) {
        return NaN;
    }
    let sum = 0;
    for (i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

console.log(getMeanTemp(23, 25, 29));
console.log(getMeanTemp([23, 25, 29, 22, 24, 26, 28, 27, 30, 31, 21, 20, 19, 18, 17]));
