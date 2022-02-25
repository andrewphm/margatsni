import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.error = null
      state.isFetching = false
      state.currentUser = action.payload
    },
    loginFailure: (state, action) => {
      state.isFetching = false
      state.error = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, setCurrentUser } =
  userSlice.actions

export default userSlice.reducer
