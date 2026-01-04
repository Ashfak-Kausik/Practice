let temperatures;
let sum;
let meanTemp;

function getMeanTeamp() {
    sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;
    return meanTemp;
}

temperatures = [23, 25, 29, 22, 24, 26, 28, 27, 30, 31, 21, 20, 19, 18, 17];
getMeanTeamp();
console.log(`Mean Temperature: ${meanTemp}°C`);

temperatures = [30, 32, 31, 29, 28, 27, 33, 29, 22, 24, 26, 25, 28, 30, 31];
getMeanTeamp();
console.log(`Mean Temperature: ${meanTemp}°C`);