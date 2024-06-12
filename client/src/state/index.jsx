import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark',
  userId: '63701cc1f03239b7f700000e',
  role: null,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    setUserRole: (state, action) => {
      state.role = action.payload
    },
    logoutUser: (state) => {
      state.role = null
    },
  },
})

export const { setMode ,setUserRole,logoutUser,} = globalSlice.actions

export default globalSlice.reducer
