//// authenticate.js - reducer for user authentication
import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    value: {
        authenticated: localStorage.getItem("LOGGED_IN") ?? 0,
    }
}

const authSlice = createSlice({
    name: 'authenticate',
    initialState: initialStateValue,
    reducers: {
        authenticateUser: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { authenticateUser } = authSlice.actions;
export default authSlice.reducer;