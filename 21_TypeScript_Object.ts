interface Person {
    Name: string,
    Age: number,
    Nationality: string,
     IT_Student: boolean,
    Languages: string[]
};

let person: Person = {
    Name: "Usman",
    Age: 17,
    Nationality: "Pakistani",
    IT_Student: true,
    Languages: ["English", "Urdu"]
}
console.log(person);

interface car{
    Name: string,
    Company: string,
    color: string,
    Year: number,
}
let car: car = {
    Name: "Fortuner",
    Company: "Toyota",
    color: "White",
    Year: 2021,
    };

    console.log(car);
    