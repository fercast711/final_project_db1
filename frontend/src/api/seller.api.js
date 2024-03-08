import axios from 'axios';

export const getSellers = async() =>
    await axios.get('/api/seller/getSellers')