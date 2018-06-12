Bienvenidos a CBI Talent Hackaton, 

PREGUNTAS de SQL
Pregunta 1
Dada las siguientes tablas:

CREATE  TABLE IF NOT EXISTS `RP`.`FRIENDSHIP` (
  `Friendship_id` BIGINT NOT NULL,
  `User_oid` BIGINT NOT NULL ,
  `User_oidb` BIGINT NOT NULL ,
  `Pending` TINYINT(1) DEFAULT 1,
  `Accepted` DATETIME DEFAULT NULL
)
CREATE  TABLE IF NOT EXISTS `RP`.`USER` (
  `User_oid` BIGINT NOT NULL ,
  `Active` TINYINT(1) NOT NULL DEFAULT 1,
  `Username` VARCHAR(25) NULL
)
Crear una consulta que obtenga de forma unica todos los usuarios que SON amigos del usuario con User_oid = 323.

Notas:
La amistad de un usuario viene determinada por el estado de Pending y Accepted
El usuario de entrada, puede estar tanto en el campo FRIENDSHIP.User_oid como FRIENDSHIP.User_oidb
En la lista resultado no debe aparecer el User_oid = 323
Pregunta 2
Dada la siguiente consulta:

SELECT C.Field, C.Foreign_key, C.Lang_id, C.Content, C.App_oid, L.Code, L.Locale, L.Untranslated
  FROM I18N.CONTENT C, I18N.LANG_APP LA, I18N.LANGUAGE L
  WHERE C.Schema = 'DATA' AND C.Table = 'MYTABLE' AND C.Foreign_key = 43255
    AND (C.App_oid = 40 OR C.App_oid IS NULL)
    AND LA.App_oid = 40
    AND LA.Lang_id = C.Lang_id
    AND L.Lang_id = C.Lang_id;
Realiza una consulta similar, pero optimizando lo máximo posible su rendimiento (tuning para Motor MySQL)

Ejercicios de Programación
En esta seccion cualquier lenguaje esta permitido. 

Pregunta 1
A Pedro el pastelero le gusta hacer pasteles. Tiene algunas recetas e
ingredientes. Desgraciadamente, no se le dan bien las matemáticas. ¿Le
puedes ayudar a averiguar cuántos pasteles puede hacer teniendo en cuenta
sus recetas?

Implementa la función cakes, para que dadas la receta (como un array)
y una lista de ingredientes (también un array) devuelva el número máximo
de pasteles que puede hacer Pedro (número entero). Para simplificar, no
se tienen en cuenta las unidades de medida de las cantidades. Cualquier
ingrediente que no esté presente, se puede considerar 0.

Ejemplos:

cakes(['flour' => 500, 'sugar' => 200, 'eggs' => 1], ['flour' => 1200, 'sugar' => 1200, 'eggs' => 5, 'milk' => 200]);
//devuelve: 2
cakes(['apples' => 3, 'flour' => 300, 'sugar' => 150, 'milk' => 100, 'oil' => 100], ['sugar' => 500, 'flour' => 2000, 'milk' => 2000]);
//devuelve: 0
Pregunta 2
¡El GPS se ha roto y tenemos que llegar a un sitio!

Por suerte, tienes un mapa y tu algoritmo sigue intacto. Eso sí, tu mapa es
un poco    extraño: todas las intersecciones están etiquetadas con números enteros
diferentes y las  carreteras que las conectan están etiquetadas con el tiempo
que se tarda en recorrerlas expresado en minutos.

Te encuentras en la intersección etiquetada como start y tu destino es la
interescción etiquetada como finish.

Dispondrás del número total de intersecciones y un array de carreteras, cada
una de ellas con las propiedades: from, to (las interesecciones están
etiquetadas con números enteros menores que el número de intersecciones) y
drivingTime. Las carreteras sólo pueden ser usadas para ir desde from a
to. No hay carreteras de doble sentido.

Completa la función para que devuelva un array de intersecciones de la ruta
más rápida desde start hasta finish (ambas incluidas).

Si hay vairas rutas iguales, coge cualquiera. Si no hay rutas, devuelve null.

Ejemplo:

var roads = [
    {from: 0, to: 1, drivingTime: 5},
    {from: 0, to: 2, drivingTime: 10},
    {from: 1, to: 2, drivingTime: 10},
    {from: 1, to: 3, drivingTime: 2},
    {from: 2, to: 3, drivingTime: 2},
    {from: 2, to: 4, drivingTime: 5},
    {from: 3, to: 2, drivingTime: 2},
    {from: 3, to: 4, drivingTime: 10}
];
navigate(5, roads, 0, 4);
// devolvería [0, 1, 3, 2, 4]. Tiempo más rápido is 5 + 2 + 2 + 5 = 14 minutes
Solo nos queda desearos GL&HF
