import axios from 'axios';

export const getSalesxAgent = async() => 
    axios.get('/api/report/getSalesxAgent')

export const getBuyerPurchases = async() => 
    axios.get('/api/report/buyerPurchases')

export const getCitySales = async() => 
    axios.get('/api/report/citySales')

export const getSellerSales = async() => 
    axios.get('/api/report/sellerSales')

export const getFeatureSales = async() => 
    axios.get('/api/report/featureSales')

export const getProperty_priceSales = async() => 
    axios.get('/api/report/property_priceSales')

export const getBestSellingAgent= async(data) => 
    axios.get(`/api/report/bestsellingagent/${data}`)

export const getAgentsPerformance= async(data) => 
    axios.get(`/api/report/agentsperformance/${data}`)