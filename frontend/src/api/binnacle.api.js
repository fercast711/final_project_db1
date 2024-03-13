import axios from 'axios';

export const getBinnacle = async() =>
    await axios.get('/api/binnacle/getBinnacle');
