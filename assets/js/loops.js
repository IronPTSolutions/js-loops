
const message = "Hello # world!"

// FOR

let vocals = 0;
let consonats = 0;
for (let character of message) {

  if (character === '#') {
    break;
  }

  switch (character.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      vocals++;
      break;
    case ' ':
    case '!':
      break;
    default:
      consonats++;
  }
}
console.log(`vocals: ${vocals}`);
console.log(`consonants: ${consonats}`);

// WHILE
const password = prompt('Insert a password');
// letters && numbers

let isSecure = false;
let containsLetters = false;
let containsNumber = false;
let i = 0;
while (!isSecure && i < password.length) {
  containsNumber = containsNumber || !Number.isNaN(Number(password[i]));
  containsLetters = containsLetters || !Number.isNaN(Number(password[i]));
  isSecure = containsLetters && containsNumber;
  i++;
}

if (isSecure) {
  console.log(`the password ${password} is secure`);
} else {
  console.log(`nope, try again`);
}




