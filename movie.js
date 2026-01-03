let movies = [];

while (true) {
    let title = prompt("Enter a movie title or press cancel to finish:");
    if (title === null) break;

    let imdb = parseFloat(prompt("Enter the IMDb rating for:"));
    movies.push({title: title, imdb: imdb});
}

console.log("Movie Ratings:");
for (let movie of movies) {
    if (movie.imdb < 7) {
        console.log(`${movie.title} ${movie.imdb} - Bad movies`);
    }
    else if (movie.imdb >= 7) {
        console.log(`${movie.title} ${movie.imdb} - Good movies`);
    }
}