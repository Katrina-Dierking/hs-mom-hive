import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = [
  {
    id: 1,
    title: "Sign-ups for the Geography Challenge now open",
    content: "Open enrollment is here. Space is limited.",
  },
  {
    id: 2,
    title: "Mom's Night Out",
    content: "This month we're having a virtual craft night. Supply list TBA",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
        reducer(state,action) {
            //toolkit allows for new state underneath in createSlice rather than spreading it in
            state.push(action.payload)
        },
        prepare(title, content) {
            return {
                payload: {
                    id: nanoid(),
                    title, 
                    content
                }
            }
        }
    }
  },
});

export const selectAllPosts = (state) => state.posts;
export const {postAdded}= postsSlice.actions;
export default postsSlice.reducer;
