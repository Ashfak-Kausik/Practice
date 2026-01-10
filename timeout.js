let count = 1;

const timerId = setInterval(() => {
    console.log(count);
    count++;
}, 2000);

setTimeout(() => {
    clearInterval(timerId);
}, 20000);