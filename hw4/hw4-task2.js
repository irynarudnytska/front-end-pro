const userNumber = prompt("Enter a three-digit number");
const arrayDigits = userNumber.split("");
if (arrayDigits[0] === arrayDigits[1] && arrayDigits[0] === arrayDigits[2]) {
  console.log("All three digits are identical");
} else if (
  arrayDigits[0] !== arrayDigits[1] &&
  arrayDigits[0] !== arrayDigits[2] &&
  arrayDigits[1] !== arrayDigits[2]
) {
  console.log("All digits are different");
} else {
  console.log("Some digits are identical");
}
