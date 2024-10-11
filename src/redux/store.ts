import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
import walletSlice from "./slices/walletSlice";

export const store = configureStore({
    reducer: {
        // The name of the reducer, needs to match the name in the createSLice function in
        // your postSlice file
        post: postSlice,
        wallet: walletSlice

    },
})