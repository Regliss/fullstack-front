import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = (props) => {
    return (
        <div className="shop__grid">
            {
                props.products.map((product) => (
                    <ProductCard product={product} key={product.id}/>
                ) )
            }
        </div>
    );
}

export default ProductGrid;