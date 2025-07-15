"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
// Try changing to "hello", 10, null, NaN
if (isNaN(userInput)) {
    console.log("Not a number");
} else {
    console.log("Is a number");
}