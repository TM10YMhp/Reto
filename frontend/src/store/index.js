import { configureStore } from '@reduxjs/toolkit'
import { data } from './slices/index'

export default configureStore({
  reducer: {
    data,
  },
})
