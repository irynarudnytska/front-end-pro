const userInput = prompt("Enter any text here");

const charsToRemove = [];
let charToRemove = "";

while (true) {
  charToRemove = prompt(
    "Enter any character you would like to delete from your initial input"
  );
  if (charToRemove === null) {
    break;
  }
  charsToRemove.push(charToRemove);
}

function removeCharacters(text, charsToRemove) {
  const chars = text.split("");
  const filteredChars = [];
  chars.forEach((char) => {
    if (!charsToRemove.includes(char)) {
      filteredChars.push(char);
    }
  });
  return filteredChars.join("");
}

console.log(removeCharacters(userInput, charsToRemove));
