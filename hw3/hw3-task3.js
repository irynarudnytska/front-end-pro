function splitNumberIntoDigits(stringToSplit) {
  const arrayOfStrings = stringToSplit.split("");
  return arrayOfStrings.join(" ");
}
console.log(splitNumberIntoDigits("10369"));
