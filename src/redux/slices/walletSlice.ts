import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [{}]

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {

        addWallets: (state, action: PayloadAction<any>) => {
            // Fetching all posts and updating the state
            state.push(...action.payload);
        },
        updateWallet: (state, action: PayloadAction<any>) => {
            const { id, name, balance, token } = action.payload;
            const walletIndex = state.findIndex((wallet: any) => wallet.id === id);
            if (walletIndex !== -1) {
                state[walletIndex].name = name;
                state[walletIndex].balance = balance;
                state[walletIndex].token = token;
            }
        },
        addWallet: (state, action: PayloadAction<any>) => {
            // getting the data from the component in the frontend
            const { id, name, balance, token } = action.payload
            state.push({ name, balance, token })
        },
        deleteWallet: (state, action: PayloadAction<any>) => {
            const walletId = action.payload
            // You need to return the state
            return state = state.filter((wallet: any) => wallet.id !== walletId)
        }

    }
})

export const { addWallet, deleteWallet, updateWallet, addWallets } = walletSlice.actions
export default walletSlice.reducer