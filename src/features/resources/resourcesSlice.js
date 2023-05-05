import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfResources: 10
}

const resourcesSlice = createSlice({
    name: 'resource', 
    initialState, 
    reducers: {
        ordered: state => {
            state.numOfResources-- 
        }, 
        restocked: (state, action) => {
            state.numOfResources += action.payload
        }, 
        reset: (state) => {
            state.numOfResources= 0; 
        }, 
        incrementByAmount: (state, action) => {
            state.numOfResources += action.payload;
        }
    }
})

export default resourcesSlice.reducer
export const { ordered, restocked, reset, incrementByAmount} = resourcesSlice.actions