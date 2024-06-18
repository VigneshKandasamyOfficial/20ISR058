const productService = require('../services/productService');

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching all products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getProductById = async (req, res) => {
    const { category, productId } = req.params;
    try {
        const product = await productService.getProductById(category, productId);
        if (!product) {
            return res.status(404).json({ message: `Product with ID ${productId} not found` });
        }
        res.json(product);
    } catch (error) {
        console.error(`Error fetching product ${productId} in category ${category}:`, error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
};
