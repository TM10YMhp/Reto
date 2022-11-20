const { Router } = require('express')
const router = Router()
const {
  cifrar,
  cifrarRapido,
  descifrar
} = require('../utils')

router.post('/cipher', (req, res, next) => {
  try {
    const { password } = req.body

    const result = cifrar(password)
    res.json({ result })
  } catch (error) {
    next(error)
  }
})
router.post('/decipher', (req, res, next) => {
  try {
    const { password } = req.body

    const result = descifrar(password)
    res.json({ result })
  } catch (error) {
    next(error)
  }
})

module.exports = router
