let magicians : string[] = ["David Copperfield", "Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];

function make_great(magicianArray : string[]) {
    for (let i=0; i<magicianArray.length; i++) {
       magicians[i] = `The Great ${magicianArray[i]}`;
    };
}

function show_magicians(magician : string[]) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magicians);

show_magicians(magicians);