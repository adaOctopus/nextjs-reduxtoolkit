import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [{

    id: 1,
    title: "First Post!",
    description: "Hello Gandalf!",

}]

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        updatePost: (state, action: PayloadAction<any>) => {
            state = action.payload
            // getting the data from the component in the frontend
            const { id, title, description } = action.payload
            state.push({ id, title, description })
        },
        deletePost: (state, action: PayloadAction<any>) => {
            const postid = action.payload
            state = state.filter((post: any) => post.id !== postid)
        }

    }
})

export const { updatePost, deletePost } = postSlice.actions
export default postSlice.reducer