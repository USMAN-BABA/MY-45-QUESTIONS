"use strict";
let guestList = ["Imran Khan", "Aamir Khan", "Kamran Tesori"];
// for (let i=0; i<guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}. \nIt is our pleasure to invite you for dinner.\nThank You.\n`);
// }
//  console.log("Imran Khan is not coming at dinner.\n");
guestList[0] = "Sir Zia Khan";
// for (let i=0; i<guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}. \nIt is our pleasure to invite you for dinner.\nThank You.\n`);
// }
// console.log("You just found a bigger dinner table, so now more space is available.\n");
guestList.unshift("Mussadiq Malik");
guestList.splice(2, 0, "Sarfaraz Ahmed");
guestList.push("Babar Azam");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}. \nIt is our pleasure to invite you for dinner.\nThank You.\n`);
}
console.log("Sorry,I can invite only two people for dinner.");
let removedGuest;
while (guestList.length > 2) {
    removedGuest = guestList.pop();
}
if (removedGuest !== undefined) {
    for (let i = 0; i < removedGuest.length; i++) {
        console.log(`sorry, ${removedGuest} . I can not invite you for dinner.`);
    }
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}. \nYou are still invited.\nThank You.\n`);
}
guestList.splice(0, 2);
console.log(guestList);
