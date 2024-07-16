import { createSlice } from '@reduxjs/toolkit'
import { service_type } from '@/data/services/services'

type state_type = {
  selected_services: service_type[]
}

const initial_state: state_type = {
  selected_services: [],
}

const doctor_slice = createSlice({
  name: 'doctor',
  initialState: initial_state,
  reducers: {},
})

export default doctor_slice.reducer
