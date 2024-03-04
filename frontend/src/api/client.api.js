import axios from 'axios';

export const createClient = async(data) =>
    axios.post('/api/client/insertClient', data)