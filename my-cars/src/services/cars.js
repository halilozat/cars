import api from "./api.js";

export const getCars = async (take) => await api.get(`/listing?sort=1&sortDirection=0&take=${take}`)
export const getCarDetails = async (id) => await api.get(`/detail?id=${id}`)