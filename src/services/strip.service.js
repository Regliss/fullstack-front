export default {
    createSession(body) {
        console.log("test");
        return fetch("http://localhost:3131/api/v1/checkout/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((res) => res.json())
    }
}