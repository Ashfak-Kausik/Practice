let cities = [
    {name: "New York",
    country: "USA",
    population: 18.65e6},

    {name: "Tokyo",
    country: "Japan",
    population: 37.4e6},

    {name: "London",
    country: "UK",
    population: 9.0e6},

    {name: "Paris",
    country: "France",
    population: 11.0e6},

    {name: "Berlin",
    country: "Germany",
    population: 3.6e6},
]

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} in ${city.country} has a population of ${city.population} people. It is a very large city.`);
    }
}