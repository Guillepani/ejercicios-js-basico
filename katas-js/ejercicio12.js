/* Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen
elementos duplicados, en caso que existan los elimina para retornar un array sin los
elementos duplicados. */
// Pista (cuando eliminamos algo de un array, su longitud se verá afectada)
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

const removeDuplicates = (array) => [...new Set(array)];

console.log(removeDuplicates(duplicates));