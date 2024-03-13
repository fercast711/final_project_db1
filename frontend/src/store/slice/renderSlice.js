import { createSlice } from "@reduxjs/toolkit";

const renderSlice = createSlice({
    name: 'render',
    initialState: {
        home: true,
        agent: false,
        seller: false,
        buyer: false,
        propertiesMarket: false,
        soldProperties: false,
        reports: false,
        binnacle: false
    },
    reducers:{
        setHome: (state) => {
          for ( const key in state){
            if(key === 'home') state[key] = true;
            else state[key] = false;
          }
        },
        setAgent: (state) => {
            for ( const key in state){
                if(key === 'agent') state[key] = true;
                else state[key] = false;
              }
        },
        setSeller: (state) => {
            for ( const key in state){
                if(key === 'seller') state[key] = true;
                else state[key] = false;
              }
        },
        setBuyer: (state) => {
            for ( const key in state){
                if(key === 'buyer') state[key] = true;
                else state[key] = false;
              }
        },
        setPropertiesMarket: (state) => {
            for ( const key in state){
                if(key === 'propertiesMarket') state[key] = true;
                else state[key] = false;
              }
        },
        setSoldProperties: (state) => {
            for ( const key in state){
                if(key === 'soldProperties') state[key] = true;
                else state[key] = false;
              }
        },
        setReports: (state) => {
          for ( const key in state){
            if(key === 'reports') state[key] = true;
            else state[key] = false;
          }
        },
        setBinnacle: (state) => {
          for ( const key in state){
            if(key === 'binnacle') state[key] = true;
            else state[key] = false;
          }
        }
    }
})

export const { 
    setAgent, 
    setBuyer, 
    setHome, 
    setPropertiesMarket, 
    setSeller, 
    setSoldProperties,
    setReports,
    setBinnacle
} = renderSlice.actions

export default renderSlice.reducer