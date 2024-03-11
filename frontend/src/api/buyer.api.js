import axios from 'axios';

export const getBuyers = async() =>
    await axios.get('/api/buyer/getBuyers')

export const insertBuyer = async(data) =>
    await axios.post('/api/buyer/insertBuyer', data)

export const updateBuyer = async(data) =>
    await axios.put('/api/buyer/updateBuyer', data)

export const deleteBuyer = async(data) =>
    await axios.post('/api/buyer/deleteBuyer', data)