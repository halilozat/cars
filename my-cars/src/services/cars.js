import api from "./api.js";

export const getCars = async () => await api.get('/listing?sort=1&sortDirection=0&take=10')
export const getCarDetails = async (id) => await api.get(`/detail?id=${id}`)