const arrayUsdToUah = [];
const exchangeRate = 44;

for (let i = 10; i <= 100; i++) {
  arrayUsdToUah.push(i * exchangeRate);
}

console.log(arrayUsdToUah);
