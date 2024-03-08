import axios from "axios";

export const createAgent = async (data) => 
    await axios.post('/api/agent/insertAgent',data)

export const getAgents = async() =>
    await axios.get('/api/agent/getAgents')