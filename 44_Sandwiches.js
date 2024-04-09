"use strict";
function sandwich(items) {
    console.log("\nMaking your sandwich with:");
    items.forEach(element => {
        console.log(`- ${element}`);
    });
    console.group("Thank You for Ordering!\n");
}
sandwich(["ham", "cheese", "bread"]);
sandwich(["cheese", "lettuce", "tomato"]);
sandwich(["turkey", "mayo", "lettuce", "tomato"]);
