const app = require('./src/index.js')
const {
  cifrar,
  cifrarRapido,
  descifrar,
  descifrarRapido,
} = require('./src/utils')

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('http://localhost:', PORT)
})

function cifrarAsync(number) {
  new Promise(resolve => {
    console.time('cifrarAsync >>>')
    const arr = number.toString().split('')

    for (const i in arr) {
      arr[i] = (Number(arr[i]) + 7) % 10
    }

    ;[arr[2], arr[3], arr[0], arr[1]] = [arr[0], arr[1], arr[2], arr[3]]

    console.log(`output: ${arr.join('')}`)
    console.timeEnd('cifrarAsync >>>')
    resolve()
  })
}

console.log('-----------')
cifrar(1234)
cifrar(4567)
console.log('-----------')
cifrarRapido(1234)
cifrarRapido(4567)
console.log('-----------')
cifrarAsync(1234)
cifrarAsync(4567)
console.log('-----------')
descifrar(0189)
descifrar(3412)
console.log('-----------')
descifrarRapido('0189')
descifrarRapido('3412')
console.log('-----------')
