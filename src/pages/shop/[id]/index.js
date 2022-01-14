import React, {useEffect} from 'react';
import { useRouter } from "next/router";

import { getProduct } from "../../../graphql/queries/products";
import { useQuery } from "@apollo/react-hooks";

const Index = () => {
    const router = useRouter();

    const { loading, error, data } = useQuery(getProduct, {
        variables: {
            id: router.query.id
        }
    });
    
    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data.title);

    return (
        <div>
            {data.getProduct.price}
        </div>
    );
}

export default Index;