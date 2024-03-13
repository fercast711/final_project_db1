import axios from "axios";

export const getUser = (data) => 
    axios.post('/api/logIn/getDataUser', data)