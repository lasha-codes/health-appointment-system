import { configureStore } from '@reduxjs/toolkit'
import doctor_slice from '../slices/doctor_slice'

const store = configureStore({
  reducer: {
    doctor: doctor_slice,
  },
})

export default store
