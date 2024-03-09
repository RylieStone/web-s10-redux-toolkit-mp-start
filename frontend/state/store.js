// ✨ create your `store` in this module
import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./quotesSlice";
const store = configureStore({
    reducer: {
        quoteReducer: quotesSlice
    }
})
export default store