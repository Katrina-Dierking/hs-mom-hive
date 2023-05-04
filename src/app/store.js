import { configureStore } from "@reduxjs/toolkit";
import resourcesReducer from '../features/resources/resourcesSlice'
import userReducer from '../features/user/userSlice'

export const store =configureStore({
    reducer: {
        resource:resourcesReducer,
        user: userReducer
    }
})