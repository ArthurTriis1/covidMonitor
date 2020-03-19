import axios from 'axios'

export const covidAPI = axios.create({
    baseURL: 'https://corona.lmao.ninja'
})
