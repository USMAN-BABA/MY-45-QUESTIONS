"use strict";
let guestList = ["Imran Khan", "Aamir Khan", "Kamran Tesori"];
// for (let i=0; i<guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}. \nIt is our pleasure to invite you for dinner.\nThank You.\n`);
// }
console.log("Imran Khan is not coming at dinner.\n");
guestList[0] = "Sir Zia Khan";
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}. \nIt is our pleasure to invite you for dinner.\nThank You.\n`);
}
console.log("I just found a bigger dinner table, so now more space is available.\n");
guestList.unshift("Mussadiq Malik");
guestList.splice(2, 0, "Sarfaraz Ahmed");
guestList.push("Babar Azam");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}. \nIt is our pleasure to invite you for dinner.\nThank You.\n`);
}
