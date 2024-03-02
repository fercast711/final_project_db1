import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        signUp: false,
        logIn: false,
    },
    reducers:{
        setSignUp: (state, actions) => {
            state.signUp = actions.payload
        },
        setLogIn: (state, actions) => {
            state.logIn = actions.payload
        }
    }
})

export const { setLogIn, setSignUp} = authSlice.actions;
export default authSlice.reducer;