import axios from "axios";

export const createAgent = async (data) => 
    await axios.post('/api/agent/insertAgent',data)

export const getAgents = async() =>
    await axios.get('/api/agent/getAgents')

export const updateAgent = async(data) =>
    await axios.put('/api/agent/updateAgent', data)

export const deleteAgent = async(data) =>
    await axios.post('/api/agent/deleteAgent', data)