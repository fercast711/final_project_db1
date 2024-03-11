import axios from 'axios';

export const getSellers = async() =>
    await axios.get('/api/seller/getSellers');

export const insertSeller = async(data) =>
    await axios.post('/api/seller/insertSeller', data);

export const updateSeller = async(data) =>
    await axios.put('/api/seller/updateSeller', data);

export const deleteSeller = async(data) =>
    await axios.post('/api/seller/deleteSeller', data);