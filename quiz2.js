const rose_unit_price = 8;
const lily_unit_price = 10;
const tulip_unit_price = 2;

let rose_quantity = 70;
let lily_quantity = 50;
let tulip_quantity = 120;

let total_rose_price = rose_unit_price * rose_quantity;
let total_lily_price = lily_unit_price * lily_quantity;
let total_tulip_price = tulip_unit_price * tulip_quantity;

let total_flower_price = total_rose_price + total_lily_price + total_tulip_price;

console.log("Rose - unit price: " + rose_unit_price + ", quantity: " + rose_quantity + ", value: " + total_rose_price);
console.log("Lily - unit price: " + lily_unit_price + ", quantity: " + lily_quantity + ", value: " + total_lily_price);
console.log("Tulip - unit price: " + tulip_unit_price + ", quantity: " + tulip_quantity + ", value: " + total_tulip_price);
console.log("Total flower price: " + total_flower_price);

rose_quantity = rose_quantity - 20;
lily_quantity = lily_quantity - 30;

total_rose_price = rose_unit_price * rose_quantity;
total_lily_price = lily_unit_price * lily_quantity;
total_flower_price = total_rose_price + total_lily_price + total_tulip_price;

console.log("After selling some flowers:");
console.log("Rose - unit price: " + rose_unit_price + ", quantity: " + rose_quantity + ", value: " + total_rose_price);
console.log("Lily - unit price: " + lily_unit_price + ", quantity: " + lily_quantity + ", value: " + total_lily_price);
console.log("Tulip - unit price: " + tulip_unit_price + ", quantity: " + tulip_quantity + ", value: " + total_tulip_price);
console.log("Total flower price: " + total_flower_price);
