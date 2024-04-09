let magicians : string[] = ["David Copperfield", "Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];

function show_magicians(magician : string[]) {
    magician.forEach(element => {
        console.log(element);
    });
}

show_magicians(magicians);