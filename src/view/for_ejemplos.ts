//En este script ejecutaremos un for in y un for out

let list = [4, 5, 6];

//for in recorre objetos iterables y nos muestra sus indices
for (let i in list) {
   console.log(i); // "0", "1", "2",
}

//for of es una caracteristica introducida en ES6, la cual nos permite recorrer colecciones obteniendo su valor
for (let i of list) {
   console.log(i); // "4", "5", "6"
}