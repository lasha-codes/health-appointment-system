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
  reducers: {
    toggle_service: (state, { payload }) => {
      const { service }: { service: service_type } = payload
      const added_service = state.selected_services.find((item) => {
        return service.id === item.id
      })
      if (added_service) {
        state.selected_services = state.selected_services.filter((item) => {
          return item.id !== added_service.id
        })
      } else {
        state.selected_services = [...state.selected_services, service]
      }
      console.log(state.selected_services)
    },
  },
})

export default doctor_slice.reducer

export const { toggle_service } = doctor_slice.actions
