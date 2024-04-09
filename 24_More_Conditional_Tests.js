"use strict";
// • Tests for equality  
console.log("Apple" == "Apple");
// Test for inequality 
console.log("Orange" != "Apple");
// • Tests using the lower case function
console.log("Apple".toLowerCase() === "apple");
// • Numerical tests involving equality  
console.log(43 === 43);
// inequality 
console.log(6 != 7);
// greater than
console.log(14 > 8);
// less than
console.log(6 < 7);
//  greater than or equal to
console.log(17 >= 17);
// less than or equal to
console.log(23 <= 24);
// • Tests using "and" operator
console.log(12 === 12 && 15 > 8);
// test using "or" operators
console.log(10 > 8 || 20 > 8);
// • Test whether an item is in a array
let array = ["Apple", "Watermelon", "Banana"];
console.log(array.includes("Watermelon"));
// • Test whether an item is not in a array
console.log(!array.includes("Peach"));
