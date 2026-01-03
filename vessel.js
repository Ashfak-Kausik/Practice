let vessel = {
    latitude : 40.07288,
    longitude : -74.93304,
    course : 285.6,
    speed : 12.4,
    imo : "1234567",
    name : "Mareno"
}

for (let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
}