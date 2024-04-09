"use strict";
let magicians = ["David Copperfield", "Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magicians(magicians);
