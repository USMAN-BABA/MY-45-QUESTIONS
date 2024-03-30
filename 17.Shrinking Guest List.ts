let guestList: string[] = ["Imran Khan","Aamir Khan","Kamran Tesori"];

// for (let i=0; i<guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}. \nIt is our pleasure to invite you for dinner.\nThank You.\n`);
// }

//  console.log("Imran Khan is not coming at dinner.\n");

 guestList[0] = "Sir Zia Khan"

// for (let i=0; i<guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}. \nIt is our pleasure to invite you for dinner.\nThank You.\n`);
// }
// console.log("You just found a bigger dinner table, so now more space is available.\n");

guestList.unshift("Mussadiq Malik");

guestList.splice(2, 0, "Sarfaraz Ahmed")

guestList.push("Babar Azam");

for (let i=0; i<guestList.length; i++) {
    console.log(`Dear ${guestList[i]}. \nIt is our pleasure to invite you for dinner.\nThank You.\n`);
}

console.log("Sorry,I can invite only two people for dinner.");

while (guestList > 2) {
   let removedGuest = guestList.pop()
}

for (let i=0; i<removedGuest.length; i++){
    console.log(`sorry, ${removedGuest}. I can not invite you for dinner.`)
}

for (let i=0; i<guestList.length; i++) {
    console.log(`Dear ${guestList[i]}. \nYou ar estill invited.\nThank You.\n`);
}
    guestList.pop();

    console.log(guestList);



