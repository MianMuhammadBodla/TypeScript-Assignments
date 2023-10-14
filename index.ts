/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

let GuestList:Array<string>=[
    "Sultan Muhammad Ali",
    "Sultan Ahmad Ali",
    "Sultan Bhudhar Aziz",
    "Mian Sarwar Bodla"
    ];
    for (let guest of GuestList){

        console.log(`Hello, ${guest} we just found a bigger dinner table`)
    }
let newgueststart:string="Allama-e-Iqbal"
GuestList.unshift(newgueststart);

let newguestmiddle:string="Quaid-e-Azam"
GuestList.splice(3,0,newguestmiddle); 
console.log(GuestList);

let guestatend:string="Zia Khan"
GuestList.push(guestatend);

console.log("New Invitation")

for (let guest of GuestList){

    console.log(`Hello, ${guest} you are invited at dinner`)
};
