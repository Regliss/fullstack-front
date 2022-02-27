export default {
    register(user) {
        return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/register`, {
        // return fetch("http://localhost:3131/api/v1/users/register", {
        // return fetch(`https://app-e-shop-ynov.herokuapp.com/api/v1/users/register`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    login(user) {
        return fetch(process.env.NEXT_PUBLIC_API_URLAPI_URL+"api/v1/users/login", {
        // return fetch("http://localhost:3131/api/v1/users/login", {
        // return fetch(`https://app-e-shop-ynov.herokuapp.com/api/v1/users/login`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
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
    getUsers(token) {
        // return fetch("http://localhost:3131/api/v1/users/get-user", {
        return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/get-users`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    updateUser(token, user) {
        // return fetch("http://localhost:3131/api/v1/users/update-user", {
        return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/update-user`+user._id, {
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
    },
    deleteUser(user, token) {
        // return fetch(`http://localhost:3131/api/v1/users/delete/${user._id}`, {
        return fetch(process.env.NEXT_PUBLIC_API_URLAPI_URL+"api/v1/users/user/delete/"+user._id, {
        // return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/delete/${user._id}`, {
            method: "DELETE",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            // body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
    addAdminUser(user) {
        console.log(user);
        // return fetch(`http://localhost:3131/api/v1/users/delete/${user._id}`, {
        return fetch(process.env.NEXT_PUBLIC_API_URLAPI_URL+"api/v1/users/addadmin/", {
        // return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/delete/${user._id}`, {
            method: "POST",
            headers: {
                // "authorization": token,
                "content-type":"application/json"
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
}