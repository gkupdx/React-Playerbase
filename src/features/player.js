//// Player.js - reducer for user/player state
import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    value: {
        player: {
            id: 0,
            name: '',
            username: '',
            email: '',
            joined: '',
        }
    }
}

const playerSlice = createSlice({
    name: 'player',
    initialState: initialStateValue,
    reducers: {
        initPlayer: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { initPlayer } = playerSlice.actions;
export default playerSlice.reducer;