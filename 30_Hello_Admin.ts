let username: string[] = ["Admin","Waqar","Umair","Hammad","Jahanzaib"];

username.forEach((names) => {
    if (names == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${names}, Thank you for logging in again.`);
    }
});