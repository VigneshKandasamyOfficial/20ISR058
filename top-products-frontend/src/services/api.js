import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Replace with your backend server URL

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories/all/products`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProductById = async (category, productId) => {
    try {
        const response = await axios.get(`${BASE_URL}/categories/${category}/products/${productId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
