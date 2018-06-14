/*
EXPLICACIÓN

Trato la receta como un objeto y los ingredientes disponibles como otro.

Quiero usar reduce() para restar de los ingredientes disponibles 
todo el objeto de ingredientes necesarios, hasta que ya no queden más.

Por ejemplo, si necesito 10 huevos y 3 patatas para hacer una receta, y tengo 35 huevos y
10 patatas, utilizar reduce() para ir restando lo necesario de los ingredientes disponibles, 
hasta que no sea posible hacer más recetas y devuelva las hechas (3 en este caso, la idea 
es usar un Math.floor() para no devolver decimales). 

rec = Recipe
ingr = Available ingredients

*/

function cakes(rec, ingr) {
  console.log('Recipe: \n', rec);
  console.log('I have the following ingredients: \n', ingr);

  /*Este es el nombre de los ingredientes que usaremos para el pastel. 
  Necesito tenerlos en un array para poder usar reduce() e iterarlos como 
  notación de corchetes (porque son propiedades de un objeto)*/

  var needed=Object.keys(rec)
  console.log("\nI need "+needed+".\n")

  return needed.reduce(function(acc, curr){

    return Math.min(Math.floor(ingr[curr] / rec[curr]),acc);
})


}
