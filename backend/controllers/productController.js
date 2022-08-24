const Product = require('../models/productModel');

//get all
// @route GET /api/products
const getProducts = async (req, res) => {
	const products = await Product.find();

	res.json(products);
};

// get one product
// @route GET /api/products/:id.,
const getOneProduct = async (req, res) => {
	const product = await Product.findById(req.params.id);

	res.json(product);
};

// @route POST /api/products
const createProduct = async (req, res) => {
	// if (!req.body.text) {
	// 	res.status(400);
	// 	throw new Error('Please add a text');
	// }
	console.log(req.body);

	const product = await Product.create({
		name: req.body.product_name,
		description: req.body.product_description,
		price: req.body.product_price,
		stock: req.body.product_stock,
	});

	// res.json({ message: 'Create product', product: product });
	res.json({ msg: 'hello' });
};

// @route PUT /api/products/:id
const updateProduct = async (req, res) => {
	const updatedProduct = await Product.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);

	res.json(updatedProduct);
};

// @route DELETE /api/products/:id
const deleteProduct = async (req, res) => {
	const product = await Product.findById(req.params.id);
	await product.remove();

	res.json({ message: `Delete product ${req.params.id}` });
};

module.exports = {
	getProducts,
	getOneProduct,
	createProduct,
	updateProduct,
	deleteProduct,
};
