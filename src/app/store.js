import { configureStore } from "@reduxjs/toolkit";
import resourcesReducer from '../features/resources/resourcesSlice'
import userReducer from '../features/user/userSlice'
import postsReducer from '../features/posts/postsSlice'

export const store =configureStore({
    reducer: {
        resource:resourcesReducer,
        user: userReducer,
        posts: postsReducer
    }
})