import { createSlice } from "@reduxjs/toolkit";

const formRender = createSlice({
    name: 'formRender',
    initialState: {
        formSellers: false,
        formBuyers: false,
        formAgents:false,
        formAgentIntialData: {
            identitynumber: '',
            name: '',
            address: '',
            phonenumber: '',
            officephone: '',
        },
        formClientInitialData: {
            identitynumber: '',
            name: '',
            address: '',
            phonenumber: '',
        }
    },
    reducers: {
        setFormSeller: (state, actions) => {
            state.formSellers = actions.payload
        },
        setFormBuyer: (state, actions) => {
            state.formBuyers = actions.payload
        },
        setFormAgent: (state, actions) => {
            state.formAgents = actions.payload
        },
        setFormAgentIntialData: (state, actions) => {
            state.formAgentIntialData = actions.payload
        },
        setFormClientInitialData: (state, actions) => {
            state.formClientInitialData = actions.payload
        }
    }
})

export const {
    setFormSeller, 
    setFormBuyer, 
    setFormAgent, 
    setFormAgentIntialData,
    setFormClientInitialData
} = formRender.actions
export default formRender.reducer