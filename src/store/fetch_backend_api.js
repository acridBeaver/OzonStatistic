import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetch_list_advertisement = createAsyncThunk('fetch_list_advertisement', async () => {
    let response = await fetch('http://localhost:8080/users/campaigns')
    return await response.json();
})

export const fetch_slice = createSlice({
    name: "api",
    initialState: {
        advertisement: []
    },
    reducers: {

    },
    extraReducers: {
        [fetch_list_advertisement.fulfilled]: (state, action) => {
            let result = [];

            for(let i in action.payload["list"])
                result.push(action.payload["list"][i]);

            state.advertisement = result
        }
    }
})

export const fetch_reducer = fetch_slice.reducer;