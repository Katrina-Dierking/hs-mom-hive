import { configureStore } from "@reduxjs/toolkit";
import resourcesReducer from '../features/resources/resourcesSlice'
import usersReducer from '../features/users/usersSlice'
import postsReducer from '../features/posts/postsSlice'
import authReducer from '../features/auth/authSlice'

export const store =configureStore({
    reducer: {
        resource:resourcesReducer,
        posts: postsReducer,
        users: usersReducer,
        auth: authReducer,
    }
})