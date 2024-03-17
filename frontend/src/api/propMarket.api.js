import axios from 'axios';

export const getPropsMarket = async() =>
    await axios.get('/api/propMarket/getPropsMarket')

export const getPropsMarketBuyer = async() =>
    await axios.get('/api/propMarket/getPropsMarketBuyer')

export const getPropsMarketSeller = async(data) =>
    await axios.get(`/api/propMarket/getPropsMarketSeller/${data}`)

export const getPropsMarketAgent = async(data) =>
    await axios.get(`/api/propMarket/getPropsMarketAgent/${data}`)

export const insertPOM = async(data) =>
    await axios.post('/api/propMarket/insertPOM', data)

export const updatePOM = async(data) =>
    await axios.put('/api/propMarket/updatePOM', data)

export const deletePOM = async(data) =>
    await axios.post('/api/propMarket/deletePOM', data)