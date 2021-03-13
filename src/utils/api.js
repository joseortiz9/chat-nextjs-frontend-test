import fetch from 'isomorphic-unfetch';

export async function fetchApi(url, method, data) {
    let withData = {};
    if (data) {
        withData = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    }

    return await fetch(url, {
        method: method,
        ...withData
    });
}

export async function fetchApiAndData(url, method, data) {
    const res = await fetchApi(url, method, data);
    return await res.json();
}