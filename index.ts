// Array of magician's names
const magicianNames: string[] = ["Habra Cadabra","Magic Mike","Amazing Alakazam","Amazing Alakazam","Magnificent Mystic"];
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}


// Modify the array to add "the Great" to each magician's name
const greatMagicianNames: string[] = make_great(magicianNames);
// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);