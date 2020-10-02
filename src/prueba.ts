import { leerTeclado } from '../view/entradeTeclado'
const prueba = async () => {
  let n: string
  n = await leerTeclado(`nombre: `)
  console.group(`Tu nombre ${n}` )
}
const prueba2 = async () => {
  await prueba()
  let n: number
  n = parseInt(await leerTeclado('dame tu edad'))
  if (n > 18) {
    console.log(`Eres mayor de edad por tener ${n} años`)
  } else {
    console.log(`Eres menor de edad por tener ${n} años`)
  }
}

//const mult = (n1: number, n2: number) = n1 * n2;
