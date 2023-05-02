import { configureStore } from "@reduxjs/toolkit";
import resourcesReducer from '../features/resources/resourcesSlice'

export const store =configureStore({
    reducer: {
        resource:resourcesReducer,
    }
})