import { errorMessage } from "../helpers/toast";

async function post(route, body) {
    try {
        const response = await fetch(`http://localhost:3333/${route}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        errorMessage(error.message);
    };
}

async function verifyToken(route, token) {
    try {
        const response = await fetch(`http://localhost:3333/${route}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
    }
}

export { post, verifyToken };