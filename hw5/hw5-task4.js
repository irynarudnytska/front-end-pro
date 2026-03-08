const inputNumber = Number(prompt("Enter a number"));

let isComposite = false;

for (let i = 2; i <= inputNumber ** 0.5; i++) {
  if (inputNumber % i === 0) {
    isComposite = true;
    break;
  }
}

if (inputNumber <= 1) {
  console.log("It is neither a prime nor a composite number");
} else if (isComposite) {
  console.log("It's a composite number");
} else {
  console.log("It is a prime number");
}
