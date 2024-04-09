function makeAlbum(artist : string , title : string , tracks?:number)  {

    let album : {artist : string , title : string , tracks?:number} = {
        artist : artist,
        title : title
    } 
if (tracks !== undefined) {
    album.tracks = tracks
}

return album;
}
let album1 = makeAlbum("Artist1" , "Title name1");
console.log(album1);

let album2 = makeAlbum("Artist2" , "Title name2");
console.log(album2);

let album3 = makeAlbum("Artist2" , "Title name3" , 8);
console.log(album3);


