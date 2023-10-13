//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteTransportation:Array<[Transport:string,Brand:string,Model:number]>=[]

favoriteTransportation.push(["Bicycle","Phoniex",2023]);
favoriteTransportation.push(["HeavyBike","Honda",2023]);
favoriteTransportation.push(["Revo","Toyata",2023]);

favoriteTransportation.forEach(([Transport, Brand, Model])=>
{console.log(
    `I like to own ${Transport} with a brand of ${Brand}, and the model is ${Model}`
)});