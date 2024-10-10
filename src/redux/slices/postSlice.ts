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

        addPosts: (state, action: PayloadAction<any>) => {
            // Fetching all posts and updating the state
            state.push(...action.payload);
        },
        updatePost: (state, action: PayloadAction<any>) => {
            const { id, title, description } = action.payload;
            const postIndex = state.findIndex((post: any) => post.id === id);
            if (postIndex !== -1) {
                state[postIndex].title = title;
                state[postIndex].description = description;
            }
        },
        addPost: (state, action: PayloadAction<any>) => {
            // getting the data from the component in the frontend
            const { id, title, description } = action.payload
            state.push({ id, title, description })
        },
        deletePost: (state, action: PayloadAction<any>) => {
            const postid = action.payload
            // You need to return the state
            return state = state.filter((post: any) => post.id !== postid)
        }

    }
})

export const { addPost, deletePost } = postSlice.actions
export default postSlice.reducer