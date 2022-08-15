import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    productsData: [],
    loadding: 'idle'
}

export const getProducts = createAsyncThunk(
    'productsFetch/getProducts',
     async (url, option) => {
        return await fetch(url, {option})
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

export const {getMenuProducts} = productsSlice.actions;
export default productsSlice.reducer