import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getListAdvertisement = createAsyncThunk('getListAdvertisement', async () => {
    const response = await fetch('http://localhost:8080/users/campaigns')
    return await response.json()
})

const initialState = {
    advertisement: [],
    loading: 'idle',
} as AdvertisementState

export const fetchSliceAdvertisement = createSlice({
    name: "advertisement",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getListAdvertisement.fulfilled, (state, action) => {
            let result = [];

            for(let i in action.payload["list"])
                result.push(action.payload["list"][i]);

            state.advertisement = result
        })
    }
})

export const fetchAdvertisementReducer = fetchSliceAdvertisement.reducer;