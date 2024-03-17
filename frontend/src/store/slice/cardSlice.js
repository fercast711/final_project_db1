import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPropsMarketAgent, getPropsMarketBuyer, getPropsMarketSeller } from "../../api/propMarket.api";
import { getSoldPropsAgent, getSoldPropsSeller } from "../../api/soldProp.api";

export const fetchGetPOMCards = createAsyncThunk(
    'card/fetchGetPOMCards',
    async()=>{
        try {
            const response = await getPropsMarketBuyer();
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
export const fetchGetPOMCardsSeller = createAsyncThunk(
    'card/fetchGetPOMCardsSeller',
    async(data)=>{
        try {
            const response = await getPropsMarketSeller(data);
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
export const fetchGetPOMCardsAgent = createAsyncThunk(
    'card/fetchGetPOMCardsAgent',
    async(data)=>{
        try {
            const response = await getPropsMarketAgent(data);
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
export const fetchGetSPCardsSeller = createAsyncThunk(
    'card/fetchGetSPCardsSeller',
    async(data)=>{
        try {
            const response = await getSoldPropsSeller(data);
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const fetchGetSPCardsAgent = createAsyncThunk(
    'card/fetchGetSPCardsAgent',
    async(data)=>{
        try {
            const response = await getSoldPropsAgent(data);
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
const cardSlice = createSlice({
    name: 'card',
    initialState: {
        typeCard: '',
        dataCard: [],
    },
    reducers: {
        setTypeCard: (state, actions) => {
            state.typeCard = actions.payload
        },
        setDataCard: (state, actions) => {
            state.dataCard = [...actions.payload]
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGetPOMCards.fulfilled,(state, actions)=> {
            state.dataCard = [...actions.payload]
        })
        .addCase(fetchGetSPCardsSeller.fulfilled,(state, actions)=> {
            state.dataCard = [...actions.payload]
        })
        .addCase(fetchGetSPCardsAgent.fulfilled,(state, actions)=> {
            state.dataCard = [...actions.payload]
        })
        .addCase(fetchGetPOMCardsSeller.fulfilled,(state, actions)=> {
            state.dataCard = [...actions.payload]
        })
        .addCase(fetchGetPOMCardsAgent.fulfilled,(state, actions)=> {
            state.dataCard = [...actions.payload]
        })
    }
});


export const { setTypeCard, setDataCard} = cardSlice.actions;
export default cardSlice.reducer;