import axios from 'axios';

export const getSoldProps = async() =>
    await axios.get('/api/soldProp/getSoldProps')