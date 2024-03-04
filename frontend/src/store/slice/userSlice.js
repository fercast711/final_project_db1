import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null
    },
    reducers:{
        updateCurrentUser: (state, actions) => {
            state.currentUser = actions.payload
        },
    }
})

export const {updateCurrentUser} = userSlice.actions
export default userSlice.reducer