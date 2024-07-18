import { createSlice } from '@reduxjs/toolkit'
import { service_type } from '@/data/services/services'

export type times = {
  timeline: 'PM' | 'AM'
  time: number | null
}

type state_type = {
  selected_services: service_type[]
  available_times: times[]
}

const initial_state: state_type = {
  selected_services: [],
  available_times: [],
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
        state.selected_services = [
          ...state.selected_services,
          { ...service, charge: 0 },
        ]
      }
      console.log(state.selected_services)
    },
    input_charge: (state, { payload }) => {
      const { value, service_id }: { value: number; service_id: number } =
        payload
      const target_service = state.selected_services.find((service) => {
        return service.id === service_id
      })
      if (target_service) {
        target_service.charge = value
      }
    },
    add_available_time: (state) => {
      state.available_times = [
        ...state.available_times,
        { timeline: 'AM', time: null },
      ]
    },
  },
})

export default doctor_slice.reducer

export const { toggle_service, input_charge, add_available_time } =
  doctor_slice.actions
