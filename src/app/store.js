import { configureStore } from "@reduxjs/toolkit";
import resourcesReducer from '../features/resources/resourcesSlice'
import usersReducer from '../features/users/usersSlice'
import postsReducer from '../features/posts/postsSlice'

export const store =configureStore({
    reducer: {
        resource:resourcesReducer,
        posts: postsReducer,
        users: usersReducer,
    }
})