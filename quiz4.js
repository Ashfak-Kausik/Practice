let ticket = {
    station: "Pallabi",
    end_station: "Uttara",
    price: 50
}

console.log(ticket);
console.log(ticket.station);

console.log(`We are going from ${ticket.station} to ${ticket.end_station} and the ticket price is ${ticket.price} Taka.`);

let person = {};
person.name = "Alice";
person.surname = "Smith";

console.log(person);

books = [{
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460},

    {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    pages: 270},

    {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    pages: 320}
];

console.log(books);

let new_list = books.slice(1,3);
console.log(new_list);