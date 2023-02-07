import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'

const initialState = {
  user: null,
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.user = action.payload
    }
  },
})

export const { addData } = contactSlice.actions

export default contactSlice.reducer