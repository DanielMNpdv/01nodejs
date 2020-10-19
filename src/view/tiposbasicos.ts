//tipos basicos
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const ColorRojo = 0;
const ColorVerde = 1;
const ColorAzul = 2;

//Para trabajar con grupos de variables primero las declaras en el grupo Color
enum Color { Rojo = 0, Verde = 1, Azul = 2, Amarillo = 3}

//Ahora te mostrara sugerencias del grupo que hemos declarado antes, ya que se guardan en memoria
let colorFondo = Color.Amarillo;