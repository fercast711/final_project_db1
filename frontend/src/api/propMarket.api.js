import axios from 'axios';

export const getPropsMarket = async() =>
    await axios.get('/api/propMarket/getPropsMarket')