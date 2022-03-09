import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getProfile = createAsyncThunk('getProfile', async () => {
    const response = await fetch('http://localhost:8080/users/id')
    return await response.json()
})

const initialState = {
    profile: { id : "0", login: "none", clientId: 123},
    loading: 'idle',
} as ProfileState

export const fetchSliceProfile = createSlice({
    name: "profile",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload
            console.log(state.profile)
        })
    }
})

export const fetchProfileReducer = fetchSliceProfile.reducer;