// Completa la función que tomando dos números como argumento devuelva el más alto.

// Con if else
function getMaxNumber1(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

// Con Math.max
function getMaxNumber2(numberOne, numberTwo) {
  return Math.max(numberOne, numberTwo);
}

console.log(getMaxNumber1(10, 13));
console.log(getMaxNumber2(10, 14));