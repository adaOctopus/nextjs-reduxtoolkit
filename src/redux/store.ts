import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";

export const store = configureStore({
    reducer: {
        // The name of the reducer, needs to match the name in the createSLice function in
        // your postSlice file
        post: postSlice,

    },
})