const items = [1, 100, null, undefined, {}, 15, "10", "It's a string"];

function calculateAverage(arr) {
  let sum = 0;
  let count = 0;
  arr.forEach((element) => {
    if (typeof element === "number") {
      sum += element;
      count++;
    }
  });
  return (sum / count).toFixed(2);
}

console.log(calculateAverage(items));
