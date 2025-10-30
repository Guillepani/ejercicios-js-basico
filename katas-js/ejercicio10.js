// Calcular un promedio (media)
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numbersArray) {
  const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
  return sum / numbersArray.length;
}

console.log(average(numbers));