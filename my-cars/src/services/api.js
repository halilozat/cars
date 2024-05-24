import axios from "axios";

const TIMEOUT = 20 * 1000;

const api = axios.create({
    baseURL: 'http://sandbox.arabamd.com/api/v1',
    timeout: TIMEOUT,
});

export default api;