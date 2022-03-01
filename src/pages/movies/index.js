import React from 'react';
import Link from "next/link";

import { getProducts } from "../../graphql/queries/products";
import { useQuery } from "@apollo/react-hooks";

import ProductGrid from '../../components/product/ProductGrid/ProductGrid';
import TitlePage from "../../components/UI/Title/TitlePage";
import styles from "./index.module.scss";

const Index = () => {

    const { loading, error, data } = useQuery(getProducts);
    
    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data);

    return (
        <div className="page__shop">
            <TitlePage className={styles.h1} title="Movies"/>
            <ProductGrid products={data.getProducts}/>
        </div>
    );
}

export default Index;