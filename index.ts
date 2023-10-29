/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let nonemptyuser:string[]= [];
let username:string[] = ['ahtasham','Abtahi','Tabish',
'shoaib'];
function greetuser(username : string []): void {
  if(username.length === 0)
   {
    console.log('we find some user!');
    return;
   }

 for(const username of 'username');
  if(username)
  {
    console.log('Hello admin, would you like to see a status report?')
  }else
  {
    console.log('Hello Eric, thank you for logging in again')
  }
}
console.log('for non empty user name:\n');
greetuser(username);

username =[];

console.log('\n\nfor non empty user name:\n');
greetuser(username);