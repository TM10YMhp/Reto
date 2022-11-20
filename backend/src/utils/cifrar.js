function cifrar (number) {
  console.time('cifrar >>>')
  if (number > 9999 || number < 1000) {
    console.log(`${number} no esta en el rango 1000-9999`)
    return `${number} no esta en el rango 1000-9999`
  }

  let cuatro = Math.floor((number/1000) % 10)
  let tres = Math.floor((number/100) % 10)
  let dos = Math.floor((number/10) % 10)
  let uno = Math.floor((number/1) % 10)

  console.log(`input: ${cuatro}${tres}${dos}${uno}`)

  cuatro = (cuatro + 7) % 10
  tres = (tres + 7) % 10
  dos = (dos + 7) % 10
  uno = (uno + 7) % 10

  console.log(`after: ${cuatro}${tres}${dos}${uno}`)

  ;[dos, uno, cuatro, tres] = [cuatro, tres, dos, uno]

  const salida = '' + cuatro + tres + dos + uno
  console.log(`output: ${salida}`)
  console.timeEnd('cifrar >>>')
  return salida
}

function cifrarRapido (number) {
  number = number.toString()

  if (number.length !== 4) {
    return void console.log(`${number} debe tener 4 digitos`)
  }
  console.time('cifrarRapido >>>')

  const arr = number.split('')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = (Number(arr[i]) + 7) % 10
  }

  ;[arr[2], arr[3], arr[0], arr[1]] = [arr[0], arr[1], arr[2], arr[3]]

  const salida = arr.join('')
  console.log(`output: ${salida}`)

  console.timeEnd('cifrarRapido >>>')
  return salida
}

module.exports = { cifrar, cifrarRapido }
