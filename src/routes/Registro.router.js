const express = require('express');
const RegistroController = require('../controllers/Registro.Controller');

const router = express.Router();

router.get('/paciente', RegistroController.index);
router.get('/create', RegistroController.create);
router.post('/create', RegistroController.store);
router.post('/paciente/delete', RegistroController.destroy);
router.get('/paciente/edit/:id', RegistroController.edit);
router.post('/paciente/edit/:id', RegistroController.update);

module.exports = router;