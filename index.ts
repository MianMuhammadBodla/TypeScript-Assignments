function describe_city(city: string, country: string = "Unknow country"): void
{
   return console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities

describe_city("Lahore", "Pakistan");
describe_city("Toronto"); // Using the default country value
describe_city("California", "USA");