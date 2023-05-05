
// import axios from 'axios'
import {createSlice} from '@reduxjs/toolkit'

const initialState = 
  [
      {id: 1, name: 'Katrina Dierking'}, 
      {id: 2, name: 'Bobbi Wampler'},
      {id: 3, name: 'Ashley King'} 
  ]



// add users to API then use fetchUsers

// export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//   return axios
//     .get ('')
//     .then(res => res.data)
// })


const userSlice = createSlice({
  name:'users',
  initialState, 
  reducers: {}
})

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer