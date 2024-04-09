function  makeShirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`Creating a ${size} size t-shirt with the message: ${message}`);
}
makeShirt();

makeShirt("Medium");

makeShirt("Small" , "I love C++");