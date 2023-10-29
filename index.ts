/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
let str1 = "Ahtasham";
let str2 = "Shafique";
let num1 = 8476487;
let num2 =96788787;
let arr1 = [5,2];
let arr2 = [6,4];

//Tests for equality and inequality with strings

console.log("Tests for equality and inequality with strings");

console.log(str1 == str2 );//false
console.log(str1 !== str2 );//true
console.log(str1 >= str2 );//false
console.log(str1 <= str2 );//true
console.log(str1 === str2 );//false
console.log(str1 > str2 );//false
console.log(str1 < str2 );//true

//Tests using the lower case function

console.log("Tests using the lower case function");

console.log(str1.toLowerCase() === "Ahtasham"); //false
console.log(str2.toLowerCase() === "Shafique"); //false
console.log(str1.toLowerCase() !== "Ahtasham"); //true
console.log(str2.toLowerCase() !== "Shafique"); //true
console.log(str1.toLowerCase() <= "Ahtasham"); //false
console.log(str2.toLowerCase() <= "Shafique"); //false
console.log(str1.toLowerCase() >= "Ahtasham"); //true
console.log(str2.toLowerCase() >= "Shafique"); //true
console.log(str1.toLowerCase() < "Ahtasham"); //false
console.log(str2.toLowerCase() < "Shafique"); //false
console.log(str1.toLowerCase() > "Ahtasham");//true
console.log(str2.toLowerCase() > "Shafique");//true

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");

console.log(num1 == num2 );//false
console.log(num1 !== num2 );//true
console.log(num1 === num2 );//false
console.log(num1 >= num2 );//false
console.log(num1 > num2 );//false
console.log(num1 <= num2 );//true
console.log(num1 < num2 );//true

//Tests using "and" and "or" operators

console.log("Tests using AND and OR operators");

console.log(num1 == num2 && num1 == num2 );//false
console.log(num1 == num2 || num1 == num2 );//false
console.log(num1 === num2 && num1 <= num2 );//false
console.log(num1 === num2 || num1 >= num2 );//false
console.log(num1 === num2 && num1 === num2 );//false
console.log(num1 >= num2 || num1 <= num2 );//true
console.log(num1 <= num2 && num1 > num2 );//false
console.log(num1 >= num2 || num1 < num2 );//true
console.log(num1 < num2 && num1 > num2 );//false
console.log(num1 > num2 || num1 > num2 );//false
console.log(num1 < num2 && num1 < num2 );//true
console.log(num1 > num2 || num1 < num2 );//true

//Test whether an item is in a array

console.log("Test whether an item is in a array");

console.log(arr1.includes(4));//false
console.log(arr1.includes(2)); //true
console.log(arr2.includes(4));//true
console.log(arr2.includes(2));//false

//Test whether an item is not in a array

console.log("Test whether an item is not in a array");

console.log(!arr1.includes(4));//true
console.log(!arr1.includes(2)); //false
console.log(!arr2.includes(4));//false
console.log(!arr2.includes(2));//true