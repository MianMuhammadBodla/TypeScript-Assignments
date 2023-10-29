// Array of magician's names
const magicianNames: string[] = ["Habra Cadabra","Magic Mike","Amazing Alakazam","Amazing Alakazam","Magnificent Mystic"];

function show_magicians(magicians: string[]): void
{
    for (const items of magicians) {
        console.log(items);
    }
}


// Call the function to show the magician's names
show_magicians(magicianNames);

export{}