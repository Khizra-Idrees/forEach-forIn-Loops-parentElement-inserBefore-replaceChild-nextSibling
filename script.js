// Assignment 01

// Object Properties Exploration
// Explore the properties of an object using the `for..in` loop. Create an object with various properties and use the loop to iterate over and log each property and its corresponding value.

let obj = {
    firstName: "Alexa",
    lastName: "Play",
    songName: "Rok Sako To Rok Lo Tabdeeli Ayi Re",
    party: "PTI",
    person: "The IMRAN KHAN",
}

for(let key in obj){
    console.log(key);
    document.write("~" + key);

    console.log(obj[key]);
    document.write(" " + "=>" + obj[key] + "<br>");
}

