import { createSlice } from '@reduxjs/toolkit'
import data from 'data/data.json'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data,
    filter: 'daily'
  },
  reducers: {
    setState: (state, action) => void(state.filter = action.payload),
    setData: (state, action) => void(state.data = action.payload),
  },
})

export const { setState, setData } = dataSlice.actions

export default dataSlice.reducer
