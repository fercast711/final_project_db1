import { createSlice } from "@reduxjs/toolkit";

const formRender = createSlice({
    name: 'formRender',
    initialState: {
        formSellers: false,
        formBuyers: false,
        formAgents:false,
        formPropMarket: false,
        formSoldProp: false,
        formSellProp: false,
        formDelete: false,
        formDeleteData: null,
        image: false,
        imageUrl: '',
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
        },
        formPropMarketData: {
            name: '',
            address: '',
            city: '',
            phonenumber: '',
            bedroomcount: '',
            features: '',
            price: '',
            agentidentitynumber: '',
            selleridentitynumber: '',
            publicationdate: ''
        },
        formSoldPropData: {
            name: '',
            address: '',
            city: '',
            phonenumber: '',
            bedroomcount: '',
            features: '',
            price: '',
            saleprice: '',
            agentidentitynumber: '',
            selleridentitynumber: '',
            buyeridentitynumber: '',
            salecommission: '',
        },
        formSellPropData: null
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
        setFormPropMarket: (state, actions) => {
            state.formPropMarket = actions.payload
        },
        setFormSoldProp: (state, actions) => {
            state.formSoldProp = actions.payload
        },
        setFormSellProp: (state, actions) => {
            state.formSellProp = actions.payload
        },
        setFormAgentIntialData: (state, actions) => {
            state.formAgentIntialData = actions.payload
        },
        setFormClientInitialData: (state, actions) => {
            state.formClientInitialData = actions.payload
        },
        setFormPropMarketData: (state, actions) => {
            state.formPropMarketData = actions.payload
        },
        setFormSoldPropData: (state, actions) => {
            state.formSoldPropData = actions.payload
        },
        setFormSellPropData: (state, actions) => {
            state.formSellPropData = {
                ...actions.payload,
                buyeridentitynumber: '',
                saleprice: '',
                salecommission: '',
                saledate: ''
            }
        },
        setFormDelete: (state, actions) => {
            state.formDelete = actions.payload
        },
        setFormDeleteData: (state, actions) => {
            state.formDeleteData = actions.payload
        },
        setImage: (state, actions) => {
            state.image = actions.payload
        },
        setImageUrl: (state, actions) => {
            state.imageUrl = actions.payload
        }
    }
})

export const {
    setFormSeller, 
    setFormBuyer, 
    setFormAgent,
    setFormPropMarket,
    setFormAgentIntialData,
    setFormClientInitialData,
    setFormPropMarketData,
    setFormSoldProp,
    setFormSoldPropData,
    setFormSellPropData,
    setFormSellProp,
    setFormDelete,
    setFormDeleteData,
    setImageUrl,
    setImage
} = formRender.actions
export default formRender.reducer