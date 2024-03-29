import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInInitial: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = false
    },
    signInStart: (state) => {
      state.loading = true
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = false
    },
    signInFailure: (state) => {
      state.loading = false
      state.error = true
    },
    updateUserStart: (state) => {
      state.loading = true
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = false
    },
    updateUserFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteUserStart: (state) => {
      state.loading = true
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null
      state.loading = false
      state.error = false
    },
    deleteUserFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    signOutError: (state) => {
      state.error = true
    },
    signOut: (state) => {
      state.currentUser = null
      state.loading = false
      state.error = false
    },
  },
})

export const {
  signInInitial,
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutError,
  signOut,
} = userSlice.actions

export default userSlice.reducer
