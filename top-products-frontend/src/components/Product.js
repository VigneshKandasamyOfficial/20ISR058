import React from 'react';

const Product = ({ product }) => {
    return (
        <div>
            <h3>{product.productName}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default Product;
