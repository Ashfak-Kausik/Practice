var globalGreeting = "Good";

function tesFunction() {
    var localGreeting = "Morning";
    console.log("Function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

tesFunction();

console.log("main program:");
console.log(globalGreeting);
console.log(localGreeting); // This will cause an error
