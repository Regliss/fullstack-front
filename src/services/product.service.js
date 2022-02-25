export default {
    getProducts(token) {
        // return fetch(process.env.NEXT_PUBLIC_API_URLAPI_URL+"/api/v1/products", {
        return fetch("http://localhost:3131/api/v1/products/products/", {
        // return fetch(`https://app-e-shop-ynov.herokuapp.com/api/v1/users/login`, {
            method: "GET",
            headers: {
            //   "content-type": "application/json",
              "authorization":token
            },
            // body: JSON.stringify(products),
          }).then((res) => res.json())
    },
    getUser(token) {
        // return fetch("http://localhost:3131/api/v1/users/get-user", {
        return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/get-user`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    updateUser(token, user) {
        // return fetch("http://localhost:3131/api/v1/users/update-user", {
        return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/update-user`, {
            method: "PUT",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
    verifyToken(token) {
        // return fetch("http://localhost:3131/api/v1/users/verifytoken", {
        return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/verifytoken`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    }
}