"use strict";
let myName = "Muhammad Usman Khalil";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
