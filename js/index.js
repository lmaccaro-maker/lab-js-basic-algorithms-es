// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
console.log("¡Estoy listo!");

// Iteración 1: Nombres y entradas


let hacker1 = "Juan";
console.log("El nombre del conductor es " + hacker1);

let hacker2 = "Ana";
console.log("El nombre del conductor es " + hacker2);


// Iteración 1: Nombres y entradas

if (hacker1.length > hacker2.length) {
    console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`);
} else {
    console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`);
}


// Iteración 3: Loops


let hacker1 = "Juan"; // Driver's name

// Convert each character to uppercase and separate by spaces
let spacedName = hacker1.toUpperCase().split('').join(' ');
console.log(spacedName); // Outputs: "J U A N"


let hacker2 = "Ana"; // Navigator's name

// Reverse the order of characters
let reversedName = hacker2.split('').reverse().join('');
console.log(reversedName); // Outputs: "anA"


if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator's name goes first definitely.");
  } else {
    console.log("What? You both have the same name?");
  }