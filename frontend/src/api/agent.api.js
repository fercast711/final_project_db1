import axios from "axios";

export const createAgent = (data) => 
    axios.post('/api/agent/insertAgent',data)