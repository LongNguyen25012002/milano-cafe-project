import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    productsData: [],
    loadding: 'idle'
}

export const getProducts = createAsyncThunk(
    'productsFetch/getProducts',
     async (url) => {
        return await fetch(url)
        .then(res => res.json())
        .then(data => data)
    }
)

export const productsSlice = createSlice({
    name: 'products slice',
    initialState,
    reducers: {
      
    },
    extraReducers: builder => {
        builder
        .addCase(getProducts.pending, state => {
            state.loadding = "pending"
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loadding = "fulfilled"
            state.productsData = action.payload
        })
    }
});

export default productsSlice.reducer