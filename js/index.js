

console.log("¡Estoy listo!");




let hacker1 = "Juan";
console.log("El nombre del conductor es " + hacker1);

let hacker2 = "Ana";
console.log("El nombre del conductor es " + hacker2);


// Iteración 1: Name and Inputs

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


  //bonificacion

  // 1. Guardar texto y generarlo como variable

  let loremIpsumText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

// 2. Contar el Número de Palabras en la Cadena.

let wordCount = loremIpsumText.split(/\s+/).filter(Boolean).length;
console.log(`The number of words is: ${wordCount}`);v

// 3. Contar la Aparición de la Palabra "et".


let etCount = (loremIpsumText.match(/\bet\b/g) || []).length;
console.log(`The word "et" appears ${etCount} times.`);

// bono 2


let phraseToCheck = "Un hombre, un plan, un canal, ¡Panamá!";  // Frase original

// Preproceso: Normalizamos la cadena
let cleanedPhrase = '';
for (let char of phraseToCheck) {
  if (char.match(/[a-z0-9]/i)) { // Filtra caracteres no alfanuméricos
    cleanedPhrase += char.toLowerCase(); // Convierte a minúscula para comparar
  }
}

// Comprobación de palíndromo usando un bucle en la cadena limpiada
let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(`La frase "${phraseToCheck}" es ` + (isPalindrome ? "un palíndromo." : "no es un palíndromo."));