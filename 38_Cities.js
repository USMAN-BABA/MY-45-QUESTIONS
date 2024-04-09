"use strict";
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi");
describeCity("Hyderabad");
describeCity("London", "England");
