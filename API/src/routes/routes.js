const express = require('express')
const controller = require('../controller/spoiler')

const router = express.Router();

router.get('/spoilers/:id', controller.buscarUm)

router.get('/spoilers', controller.criar)

router.post('/spoilers', controller.atualizar)

router.put('/spoilers/:id', controller.atualizar)

router.delete('/spoiler/:id', controller.excluir  )

module.exports = router ;

