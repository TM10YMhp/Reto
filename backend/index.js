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

console.log('-----------')
cifrar(1234)
cifrar(4567)
console.log('-----------')
cifrarRapido(1234)
cifrarRapido(4567)
console.log('-----------')
descifrar(0189)
descifrar(3412)
console.log('-----------')
descifrarRapido('0189')
descifrarRapido('3412')
console.log('-----------')
