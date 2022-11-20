const cifrar = require('./cifrar.js')
const descifrar = require('./descifrar.js')

module.exports = { ...cifrar, ...descifrar }
