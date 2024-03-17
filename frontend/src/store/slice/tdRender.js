import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAgents } from "../../api/agent.api";
import { getSellers } from "../../api/seller.api";
import { getBuyers } from "../../api/buyer.api";
import { getPropsMarket } from "../../api/propMarket.api";
import { getSoldProps } from "../../api/soldProp.api";
import { getAgentsPerformance, getBestSellingAgent, getBuyerPurchases, getCitySales, getFeatureSales, getProperty_priceSales, getSalesxAgent, getSellerSales } from "../../api/reports.api";
import { getBinnacle } from "../../api/binnacle.api";

export const fetchGetAgents = createAsyncThunk(
    'tdRender/fetchGetAgents',
    async()=>{
        try {
            const response = await getAgents();
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetSellers = createAsyncThunk(
    'tdRender/fetchGetSellers',
    async()=>{
        try {
            const response = await getSellers();
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetBuyers = createAsyncThunk(
    'tdRender/fetchGetBuyers',
    async()=>{
        try {
            const response = await getBuyers();
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetPropsMarket = createAsyncThunk(
    'tdRender/fetchGetPropsMarket',
    async()=>{
        try {
            const response = await getPropsMarket();
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetSoldProps = createAsyncThunk(
    'tdRender/fetchGetSoldProps',
    async()=>{
        try {
            const response = await getSoldProps();
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetSalesxAgent = createAsyncThunk(
    'tdRender/fetchGetSalesxAgent',
    async()=>{
        try {
            const response = await getSalesxAgent();
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetBuyerPurchases = createAsyncThunk(
    'tdRender/fetchGetBuyerPurchases',
    async()=>{
        try {
            const response = await getBuyerPurchases();
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
export const fetchGetCitySales = createAsyncThunk(
    'tdRender/fetchGetCitySales',
    async()=>{
        try {
            const response = await getCitySales();
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
export const fetchGetSellerSales = createAsyncThunk(
    'tdRender/fetchGetSellerSales',
    async()=>{
        try {
            const response = await getSellerSales();
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetFeatureSales = createAsyncThunk(
    'tdRender/fetchGetFeatureSales',
    async()=>{
        try {
            const response = await getFeatureSales();
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
export const fetchGetProperty_priceSales = createAsyncThunk(
    'tdRender/fetchGetProperty_priceSales',
    async()=>{
        try {
            const response = await getProperty_priceSales();
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetBinnacle = createAsyncThunk(
    'tdRender/fetchGetBinnacle',
    async()=>{
        try {
            const response = await getBinnacle();
            return response.data.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetBestSellingAgent = createAsyncThunk(
    'tdRender/fetchGetBestSellingAgent',
    async(data)=>{
        try {
            const response = await getBestSellingAgent(data);
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetAgentPerformance = createAsyncThunk(
    'tdRender/fetchGetAgentPerformance',
    async(data)=>{
        try {
            const response = await getAgentsPerformance(data);
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

const tdRenderSlice = createSlice({
    name: 'tdRender',
    initialState: {
        tdAgent: [],
        tdSeller: [],
        tdBuyer: [],
        tdPropertyMarket: [],
        tdSoldProperty: [],
        tdReport: [],
        thReport: [],
        tdBinnacle: []
    },
    reducers: {
        setTdReports: (state, actions) => {
            state.tdReport =[...actions.payload] 
            state.thReport =[...actions.payload] 
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGetAgents.fulfilled,(state, actions)=> {
            state.tdAgent = [...actions.payload]
        })
        .addCase(fetchGetSellers.fulfilled,(state, actions)=> {
            state.tdSeller = [...actions.payload]
        })
        .addCase(fetchGetBuyers.fulfilled,(state, actions)=> {
            state.tdBuyer = [...actions.payload]
        })
        .addCase(fetchGetPropsMarket.fulfilled,(state, actions)=> {
            state.tdPropertyMarket = [...actions.payload]
        })
        .addCase(fetchGetSoldProps.fulfilled,(state, actions)=> {
            state.tdSoldProperty = [...actions.payload]
        })
        .addCase(fetchGetSalesxAgent.fulfilled, (state, actions)=> {
            state.tdReport = [...actions.payload.data]
            state.thReport = [...actions.payload.fields]
        })
        .addCase(fetchGetBinnacle.fulfilled, (state, actions)=> {
            state.tdBinnacle = [...actions.payload]
        })
        .addCase(fetchGetBuyerPurchases.fulfilled, (state, actions)=> {
            state.tdReport = [...actions.payload.data]
            state.thReport = [...actions.payload.fields]
        })
        .addCase(fetchGetCitySales.fulfilled, (state, actions)=> {
            state.tdReport = [...actions.payload.data]
            state.thReport = [...actions.payload.fields]
        })
        .addCase(fetchGetFeatureSales.fulfilled, (state, actions)=> {
            state.tdReport = [...actions.payload.data]
            state.thReport = [...actions.payload.fields]
        })
        .addCase(fetchGetSellerSales.fulfilled, (state, actions)=> {
            state.tdReport = [...actions.payload.data]
            state.thReport = [...actions.payload.fields]
        })
        .addCase(fetchGetProperty_priceSales.fulfilled, (state, actions)=> {
            state.tdReport = [...actions.payload.data]
            state.thReport = [...actions.payload.fields]
        })
        .addCase(fetchGetBestSellingAgent.fulfilled, (state, actions)=> {
            state.tdReport = [...actions.payload.data]
            state.thReport = [...actions.payload.fields]
        })
        .addCase(fetchGetAgentPerformance.fulfilled, (state, actions)=> {
            state.tdReport = [...actions.payload.data]
            state.thReport = [...actions.payload.fields]
        })
    }
})


export const { setTdReports } = tdRenderSlice.actions
export default tdRenderSlice.reducer