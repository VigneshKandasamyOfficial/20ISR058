import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProductCard = ({ product }) => {
    const randomImage = `https://source.unsplash.com/random/200x200?sig=${product.id}`;

    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={randomImage}
                alt={product.productName}
            />
            <CardContent>
                <Typography variant="h5">{product.productName}</Typography>
                <Typography variant="body2" color="textSecondary">{product.company}</Typography>
                <Typography variant="body2">Price: ${product.price}</Typography>
                <Typography variant="body2">Rating: {product.rating}</Typography>
                <Typography variant="body2">Discount: {product.discount}%</Typography>
                <Typography variant="body2">Availability: {product.availability}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
