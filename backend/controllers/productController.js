// @route GET /api/products
const getProducts = (req, res) => {
	res.json({ message: 'Get products' });
};

// @route POST /api/products
const createProduct = (req, res) => {
	res.json({ message: 'Create product' });
};

// @route PUT /api/products/:id
const updateProduct = (req, res) => {
	res.json({ message: `Update product ${req.params.id}` });
};

// @route DELETE /api/products/:id
const deleteProduct = (req, res) => {
	res.json({ message: `Delete product ${req.params.id}` });
};

module.exports = {
	getProducts,
	createProduct,
	updateProduct,
	deleteProduct,
};
