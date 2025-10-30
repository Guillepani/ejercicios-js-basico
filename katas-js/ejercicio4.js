/*He renombrado las variables, numerándolas para evitar errores en el console.log,
ya que algunas tenían el mismo nombre definido*/

//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers1[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers2[0] = "IRONMAN";
console.log(avengers2);

// 1.3 Console numero de elementos en el array usando la propiedad correcta 
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers3.length);

/* 1.4 Añade dos elementos al array: Morty y Summer. 
Muestra en consola el último personaje del array*/
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters1.push("Morty", "Summer");
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0]);
console.log(rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1, 1);
console.log(rickAndMortyCharacters3);


