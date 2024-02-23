import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentProfile: 'user',
  error: false,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileChange: (state, action) => {
      state.currentProfile = action.payload
      state.error = false
    },
  },
})

export const { profileChange } = profileSlice.actions

export default profileSlice.reducer
