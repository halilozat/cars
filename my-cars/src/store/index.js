import { createStore } from 'vuex';
import axios from "axios";
import { getCars, getCarDetails } from '../services/cars.js'

export default createStore({
    state: {
        cars: [],
        carDetails: null,
    },
    mutations: {
        setCarsData(state, payload) {
            state.cars = payload;
        },
        setCarDetailsData(state, payload) {
            state.carDetails = payload;
        },
    },
    actions: {
        async fetchCars({ commit }) {
            const response = await getCars()
            commit('setCarsData', response.data);
        },
        async fetchCarDetails({ commit }, id) {
            const response = await getCarDetails(id)
            commit('setCarDetailsData', response.data);
        },
    },
    getters: {
        cars: state => state.cars,
        carDetails: state => state.carDetails
    },
});
