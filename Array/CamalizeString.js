'use strict'
// use string -> list-style-image, border-width, my-short-string
// result should be -> listStyleImage, borderWidth, myShortString

let string = "my-short-string";    
let resultString = camalize(string);
console.log(resultString);

function camalize(str) {
    let splitString = str.split("-");

    if (splitString.length >= 2) {
        for (let loop = 1; loop < splitString.length; loop++) {
            splitString[loop] = initialUpper(splitString[loop]);
        }
    }
    return splitString.join("");
}

function initialUpper(str) {
    let uppercase = str.charAt(0).toUpperCase() + str.substr(1);
    return uppercase;
}