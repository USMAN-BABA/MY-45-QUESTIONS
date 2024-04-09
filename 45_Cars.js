"use strict";
function myCar(manufacture, modelName, ...extraOption) {
    let myCarInfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, ...extraOption));
    return myCarInfo;
}
const car = myCar("Toyota", "Corolla", { color: "Black" }, { Year: 2021 }, { Features: ["Auto", "Manual"] });
const car1 = myCar("BMW", "X5", { color: "Black" }, { Year: 2020 }, { Features: ["Panomaric Sunroof", "Electronic throttle Control"] });
console.log(car);
console.log(car1);
