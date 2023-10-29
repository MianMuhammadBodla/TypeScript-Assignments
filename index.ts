//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//object
interface Item {
    name: string ;
    description : string ;
    price : number;
}
//item1
const item1 :Item = {
    name:"camera",
    description:"a camera for taking picture",
    price : 220,
}
//item2
const item2 :Item = {
    name:"iphone15pro",
    description:"iphone15pro is best for taking picture",
    price : 1100,
}
//item3
const item3 :Item = {
    name:"macbookpro2023",
    description:"macbook pro is best for AI(Artifical Intelligence)",
    price : 1500,
}
//console.log
const items: Item[] = [item1, item2, item3];
console.log(item1.name);
console.log(item2.description);
console.log(item3.price);
//loop 
for (const item of items) {
    console.log(item.name);
    console.log(item.description);
    console.log(item.price);
  }