const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('HOLA DESDE EL SERVIDOR IDIOTAS')

})

module.exports = router;