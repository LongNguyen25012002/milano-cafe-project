import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '@/features/products-slice'

let rootReducer = {
    products: productsReducer
}

export const store = configureStore({
    reducer: rootReducer
})