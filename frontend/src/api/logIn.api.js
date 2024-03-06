import axios from "axios";

export const getUser = (data) => 
    axios.get('/api/logIn', data)