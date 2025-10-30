/* Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando
es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.*/
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(elementsArray) {
  let total = 0; //Punto de partida de ñla suma
  
  for (const element of elementsArray) { //Recorre cada elemento
    if (typeof element === 'number') { //Si es número
      total += element; //suma
    } else if (typeof element === 'string') { //Si es texto
      total += element.length; //suma su longitud
    }
  }
  
  return total / elementsArray.length; //Calcula y devuelve la media
}

console.log(averageWord(mixedElements));