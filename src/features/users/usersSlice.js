
// import axios from 'axios'
import {createSlice} from '@reduxjs/toolkit'

const initialState = 
  [
      {id: "0", name: 'Katrina Dierking'}, 
      {id: "1", name: 'Bobbi Wampler'},
      {id: "2", name: 'Ashley King'} 
  ]



// add users to API then use fetchUsers

// export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//   return axios
//     .get ('')
//     .then(res => res.data)
// })


const usersSlice = createSlice({
  name:'users',
  initialState, 
  reducers: {}
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer