import axios from 'axios';

export const getSoldProps = async() =>
    await axios.get('/api/soldProp/getSoldProps')

export const insertSP = async(data) =>
    await axios.post('/api/soldProp/insertSP',data)

export const updateSP = async(data) =>
    await axios.put('/api/soldProp/updateSP',data)

export const deleteSP = async(data) =>
    await axios.post('/api/soldProp/deleteSP',data)