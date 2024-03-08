import axios from 'axios';

export const getBuyers = async() =>
    await axios.get('/api/buyer/getBuyers')