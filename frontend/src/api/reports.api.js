import axios from 'axios';

export const getSalesxAgent = async() => 
    axios.get('/api/report/getSalesxAgent')