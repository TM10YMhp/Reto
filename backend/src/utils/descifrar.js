function descifrar (number) {
  console.time('descifrar >>>')
  console.log('input:', number)

//suma 10 para que el digito este entre el rango de 0-9
  let cuatro = Math.floor((number/1000) % 10) + 10
  let tres = Math.floor((number/100) % 10) + 10
  let dos = Math.floor((number/10) % 10) + 10
  let uno = Math.floor((number/1) % 10) + 10

  cuatro > 16 && (cuatro -= 10)
  tres > 16 && (tres -= 10)
  dos > 16 && (dos -= 10)
  uno > 16 && (uno -= 10)

//resto el 7 que se añádio en el cifrado
  cuatro -= 7
  tres -= 7
  dos -= 7
  uno -= 7

//antes del intercambio:   [cuatro, tres, dos   , uno]
//despues del intercambio: [dos   , uno , cuatro, tres]
  const salida = '' + dos + uno + cuatro + tres
  console.log(`output: ${salida}`)
  console.timeEnd('descifrar >>>')
  return salida
}

function descifrarRapido (number) {
  if (typeof number !== 'string') {
    console.log('descifrarRapido solo acepta "string"')
    return 'descifrarRapido solo acepta "string"'
  }
  console.time('descifrarRapido >>>')

  const arr = number.split('')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]) + 10
    arr[i] > 16 && (arr[i] -= 10)
    arr[i] -= 7
  }

  ;[arr[2], arr[3], arr[0], arr[1]] = [arr[0], arr[1], arr[2], arr[3]]

  const salida = arr.join('')
  console.log(`output: ${salida}`)

  console.timeEnd('descifrarRapido >>>')
  return salida
}

module.exports = { descifrar, descifrarRapido }
