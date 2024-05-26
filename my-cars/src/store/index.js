import { createStore } from 'vuex';
import { getCars, getCarDetails } from '../services/cars.js'

export default createStore({
    state: {
        cars: [],
        carDetails: null,
        currentPage: 1,
        resultsPerPage: localStorage.getItem('resultPerPage')|| 20,
    },
    mutations: {
        setCarsData(state, payload) {
            state.cars = payload;
        },
        setCarDetailsData(state, payload) {
            state.carDetails = payload;
        },
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setResultsPerPage(state, results) {
            localStorage.setItem('resultPerPage', results);
            state.resultsPerPage = results;
        },
    },
    actions: {
        async fetchCars({ commit }, take) {
            const response = await getCars(take)
            commit('setCarsData', response.data);
        },
        async fetchCarDetails({ commit }, id) {
            const response = await getCarDetails(id)
            commit('setCarDetailsData', response.data);
        },
        changePage({ commit }, page) {
            commit('setCurrentPage', page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        changeResultsPerPage({ commit }, results) {
            commit('setResultsPerPage', results);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },
    getters: {
        cars: state => state.cars,
        carDetails: state => state.carDetails,
        totalPages(state) {
            return Math.ceil(state.cars.length / state.resultsPerPage);
        },
        paginatedItems(state) {
            const start = (state.currentPage - 1) * state.resultsPerPage;
            const end = start + state.resultsPerPage;
            return state.cars.slice(start, end);
        },
    },
});
