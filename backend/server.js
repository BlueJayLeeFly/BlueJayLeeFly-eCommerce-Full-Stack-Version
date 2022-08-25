const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Product API routes
app.use('/api/products', require('./routes/productRoutes'));

app.use(errorHandler);

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
