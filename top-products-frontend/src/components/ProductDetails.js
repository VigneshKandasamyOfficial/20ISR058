import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import { Container, Typography, Box } from '@mui/material';

const ProductDetails = () => {
    const { category, productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`/categories/${category}/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProductDetails();
    }, [category, productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const randomImage = `https://source.unsplash.com/random/400x400?sig=${product.id}`;

    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
                <img src={randomImage} alt={product.productName} />
                <Typography variant="h4">{product.productName}</Typography>
                <Typography variant="h6">{product.company}</Typography>
                <Typography variant="body1">Category: {category}</Typography>
                <Typography variant="body1">Price: ${product.price}</Typography>
                <Typography variant="body1">Rating: {product.rating}</Typography>
                <Typography variant="body1">Discount: {product.discount}%</Typography>
                <Typography variant="body1">Availability: {product.availability}</Typography>
            </Box>
        </Container>
    );
};

export default ProductDetails;
