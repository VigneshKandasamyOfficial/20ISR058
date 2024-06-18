import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { getAllProducts } from '../services/api';

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await getAllProducts();
            setProducts(response.data); // Assuming API returns data in { data } format
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <h1>All Products</h1>
            <ProductList products={products} />
        </div>
    );
};

export default AllProductsPage;
