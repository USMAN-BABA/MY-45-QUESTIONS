"use strict";
let magicians = ["David Copperfield", "Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
function copyArray(array) {
    return [...array];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = `The Great ${magicianArray[i]}`;
    }
    ;
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
let modifiedArray = copyArray(magicians);
make_great(modifiedArray);
console.log("This is my Original Array");
show_magicians(magicians);
console.log("\nThis is my Modified Array");
show_magicians(modifiedArray);
