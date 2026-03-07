const inputNumber = Number(prompt("Enter a number"));

const arrayNumbers = [];
for (let i = 1; i <= 100; i++) {
  if (i ** 2 <= inputNumber) {
    arrayNumbers.push(i);
  }
}
console.log(arrayNumbers);
