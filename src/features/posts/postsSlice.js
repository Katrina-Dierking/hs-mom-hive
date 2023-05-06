import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'


const initialState = [
  {
    id: 1,
    title: "Sign-ups for the Geography Challenge now open",
    content: "Open enrollment is here. Space is limited.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    title: "Mom's Night Out",
    content: "This month we're having a virtual craft night. Supply list TBA",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
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
        prepare(title, content, userId) {
            return {
                payload: {
                    id: nanoid(),
                    title, 
                    content, 
                    date: new Date().toISOString(),
                    userId
                }
            }
        }
    }
  },
});

export const selectAllPosts = (state) => state.posts;
export const {postAdded}= postsSlice.actions;
export default postsSlice.reducer;
