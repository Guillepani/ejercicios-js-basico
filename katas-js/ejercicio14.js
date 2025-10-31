/*Crea una función que nos devuelva el número de veces que
se repite cada una de las palabras que lo conforma.*/
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(param) {
  return param.reduce((counter, word) => {
    counter[word] = (counter[word] || 0) + 1;
    return counter;
  }, {});
}

console.log(repeatCounter(counterWords));