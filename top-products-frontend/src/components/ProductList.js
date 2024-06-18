import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <Product key={product.productId} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
