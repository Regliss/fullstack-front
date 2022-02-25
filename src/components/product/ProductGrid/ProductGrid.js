import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.scss';
import Modal from "../../UI/Modal/Modal";

const ProductGrid = (props) => {
    return (
        <div className={styles.shop__grid}>
            {
                props.products.map((product) => (
                    <ProductCard product={product} key={product.id}><Modal product={product} key={product.id}/></ProductCard>
                    
                ) )
            }
        </div>
    );
}

export default ProductGrid;