import api from "./api.js";

export const getCars = async (params = {}) => {
    console.log(params)
    const defaultParams = {
        take: 20,
        sort: null,
        sortDirection: null,
        minYear: null,
        maxYear: null,
    };

    // Sağlanan parametrelerle varsayılan değerleri birleştir
    const combinedParams = { ...defaultParams, ...params };

    // Tanımlı olan parametreleri filtrele
    const filteredParams = Object.fromEntries(
        Object.entries(combinedParams).filter(([key, value]) => value !== null && value !== '')
    );

    return await api.get(`/listing`, {
        params: filteredParams,
    });
};
export const getCarDetails = async (id) => await api.get(`/detail?id=${id}`)