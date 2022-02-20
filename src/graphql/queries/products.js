import gql from "graphql-tag";

export const getProducts = gql`
    query {
        getProducts{
            id,
            title,
            description,
            img,
            age,
            language,
            releaseDate,
            duration,
            director,
            distribution,
            scriptwriter
        }
    }
`

export const getProduct = gql`
    query getProduct($id:ID){
        getProduct (id:$id){
            id,
            title,
            description,
            img,
            age,
            language,
            releaseDate,
            duration,
            director,
            distribution,
            scriptwriter
        }
    }
`