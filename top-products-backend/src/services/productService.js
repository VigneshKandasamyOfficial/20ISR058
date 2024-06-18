// Placeholder for interacting with database or external APIs
// Simulated data for demonstration purposes
const products = [
    { productId: '1', productName: 'Product 1', category: 'Phone', price: 100, rating: 4.5, discount: 10, availability: 'In stock' },
    { productId: '2', productName: 'Product 2', category: 'Computer', price: 200, rating: 4.2, discount: 5, availability: 'Out of stock' },
    // Add more products as needed
];

const getAllProducts = async () => {
    // Simulating asynchronous operation
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500); // Simulating delay
    });
};

const getProductById = async (category, productId) => {
    // Simulating asynchronous operation
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.productId === productId && p.category === category);
            if (product) {
                resolve(product);
            } else {
                reject(`Product with ID ${productId} in category ${category} not found`);
            }
        }, 500); // Simulating delay
    });
};

module.exports = {
    getAllProducts,
    getProductById,
};
