"use strict";
let currentUsers = ["Arsalan", "Shayan", "Salman", "Daniyal", "Hamzah"];
let newUsers = ["Shafeeq", "Shoaib", "Arsalan", "Daniyal", "Mitraab"];
newUsers.forEach(newUsersName => {
    let lowerCase = newUsersName.toLowerCase();
    if (currentUsers.map(user => user.toLowerCase()).includes(lowerCase)) {
        console.log(`The user name ${newUsersName} is already taken. Please enter a new user name.`);
    }
    else {
        console.log(`The user name ${newUsersName} is available.`);
    }
});
