import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';

const ProductPage = () => {
    const { category, productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [productId]); // Fetch product whenever productId changes

    const fetchProduct = async () => {
        try {
            const response = await getProductById(category, productId);
            setProduct(response.data); // Assuming API returns data in { data } format
        } catch (error) {
            console.error(`Error fetching product ${productId} in category ${category}:`, error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.productName}</h1>
            <p>Category: {product.category}</p>
            <p>Company: {product.company}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
        </div>
    );
};

export default ProductPage;
