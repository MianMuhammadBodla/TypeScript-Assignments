//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName:string ="Muhammad";

let lowercaseName:string=personName.toLowerCase();
console.log(lowercaseName);

let uppercaseName:string=personName.toUpperCase();
console.log(uppercaseName);
let word=personName.split("");

const titleCase = personName
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log (titleCase);
