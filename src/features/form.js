//// form.js - reducer for form-like elements
import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    value : {
        formFields: "valid"
    }
}

const formSlice = createSlice({
    name: 'form',
    initialState: initialStateValue,
    reducers: {
        validateForm: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { validateForm } = formSlice.actions;
export default formSlice.reducer;