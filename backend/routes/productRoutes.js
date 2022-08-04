const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json({ message: 'Get products' });
});

router.post('/', (req, res) => {
	res.json({ message: 'Set product' });
});

router.put('/:id', (req, res) => {
	res.json({ message: `Update product ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
	res.json({ message: `Delete product ${req.params.id}` });
});

module.exports = router;
