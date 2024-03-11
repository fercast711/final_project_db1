import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAgents } from "../../api/agent.api";
import { getSellers } from "../../api/seller.api";
import { getBuyers } from "../../api/buyer.api";
import { getPropsMarket } from "../../api/propMarket.api";
import { getSoldProps } from "../../api/soldProp.api";
import { getSalesxAgent } from "../../api/reports.api";

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

const tdRenderSlice = createSlice({
    name: 'tdRender',
    initialState: {
        tdAgent: [],
        tdSeller: [],
        tdBuyer: [],
        tdPropertyMarket: [],
        tdSoldProperty: [],
        tdReport: [],
        thReport: []
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
    }
})

export default tdRenderSlice.reducer