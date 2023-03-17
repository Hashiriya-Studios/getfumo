let endpoint = 'https://fumo-api.nosesisaid.com'

async function one(id) {
    return await get(`${endpoint}/fumo/${id}`)
}

async function random() {
    return await get(`${endpoint}/random`)
}

async function all() {
    return await get(`${endpoint}/`)
}

async function get(url) {
    let response = await fetch(url, { method: "GET" })
    return await response.json()
}
export {
    one,
    random,
    all
}
