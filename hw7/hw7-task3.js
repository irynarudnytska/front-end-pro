const numbers = [1, 3, 4, 6, 2, 5, 7, 4];

function removeElement(arr, valueToRemove) {
  const filteredArray = [];
  arr.forEach((element) => {
    if (element !== valueToRemove) filteredArray.push(element);
  });
  return filteredArray;
}

console.log(removeElement(numbers, 4));
