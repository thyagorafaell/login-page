const URL_BASE = 'https://reqres.in/';
const GET = 'GET';
const POST = 'POST';

const defaults = {
    method: GET,
    cache: 'default',
    headers: {
        'Content-Type': 'application/json'
    }
};

const getFetchParams = (method, params = {}) => ({ ...defaults, ...params, method });

const login = (email, password) => {
    return fetch(`${URL_BASE}api/login`, getFetchParams(POST, {
        body: JSON.stringify({ email, password })
    }));
}

export default {
    login
};