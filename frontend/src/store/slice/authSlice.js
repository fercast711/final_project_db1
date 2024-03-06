import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logIn: false,
    },
    reducers:{
        setLogIn: (state, actions) => {
            state.logIn = actions.payload
        }
    }
})

export const { setLogIn } = authSlice.actions;
export default authSlice.reducer;