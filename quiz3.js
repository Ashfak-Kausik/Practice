const num = 86;
console.log(`${typeof num} : ${num}`)

const bt = BigInt(num);
console.log(`${typeof bt} : ${bt}`);

const str = String(num);
console.log(`${typeof str} : ${str}`);

const bl = Boolean(num);
console.log(`${typeof bl} : ${bl}`);

const undef = undefined;
console.log(`${typeof undef} : ${undef}`);

let str1 = String(1234);
console.log(`${typeof str1} : ${str1}`);

let num1 = Number(str1);
console.log(`${typeof num1} : ${num1}`);

let bl1 = Boolean(num1);
console.log(`${typeof bl1} : ${bl1}`);

let bt1 = BigInt(num1);
console.log(`${typeof bt1} : ${bt1}`);

let b = true + false;
let n = 100+ 200;
let bi = 100n +200n;
let s = "Hello " + "World";
let u = undefined + undefined;

console.log(`${typeof b} : ${b}`);
console.log(`${typeof n} : ${n}`);
console.log(`${typeof bi} : ${bi}`);
console.log(`${typeof s} : ${s}`);
console.log(`${typeof u} : ${u}`);