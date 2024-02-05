import { configureStore } from "@reduxjs/toolkit";
import { currApi } from "./currencyReducer";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        [currApi.reducerPath]:currApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(currApi.middleware)
})
setupListeners(store.dispatch)