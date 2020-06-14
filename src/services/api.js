import axios from 'axios';

let baseURL = 'https://aramo-falemais-api.herokuapp.com'

export default {
    getAllDDD:  () => {
        return  axios.get(`${baseURL}/ddds`)
            .then(result => {
                return result.data;
            })
            .catch(error => {
                console.log(error)
                return [];
            })
    },

    getPlans:  () => {
        return  axios.get(`${baseURL}/plans`)
            .then(result => {
                return result.data;
            })
            .catch(error => {
                console.log(error)
                return [];
            })
    },

    calculate: (values) => {
        return axios.post(`${baseURL}/calculate-tariff`, { values })
            .then(result => {
                return result.data;
            })
            .catch(error => {
                return error.response.data
            })
    }
}