import { createSlice } from '@reduxjs/toolkit'
import { service_type } from '@/data/services/services'
import toast from 'react-hot-toast'

export type times = {
  timeline: 'PM' | 'AM'
  time: number | null
}

export type socials_type = {
  platform: 'INSTAGRAM' | 'FACEBOOK' | 'GITHUB' | 'LINKEDIN' | 'TIKTOK'
  account_link: string
  color: string
}

type state_type = {
  selected_services: service_type[]
  available_times: times[]
  social_links: socials_type[]
}

const initial_state: state_type = {
  selected_services: [],
  available_times: [{ timeline: 'AM', time: null }],
  social_links: [],
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
      let every_time_filled_out: boolean = false
      for (const idx in state.available_times) {
        if (!state.available_times[idx].time) {
          every_time_filled_out = false
          break
        } else {
          every_time_filled_out = true
        }
      }
      if (every_time_filled_out) {
        if (state.available_times.length < 6) {
          state.available_times = [
            ...state.available_times,
            { timeline: 'AM', time: null },
          ]
        } else {
          toast.error('cant add more than 6')
        }
      }
    },
    remove_available_time: (state) => {
      if (state.available_times.length > 1) {
        state.available_times = state.available_times.filter((_, idx) => {
          return state.available_times.length - 1 !== idx
        })
      }
    },
    change_time: (state, { payload }) => {
      const { time_idx, value }: { time_idx: number; value: number } = payload
      const targeted_time = state.available_times.find((time, index) => {
        return index === time_idx
      })
      if (targeted_time) {
        targeted_time.time = value
      }
    },
    toggle_timeline: (state, { payload }) => {
      const { time_idx }: { time_idx: number } = payload
      const targeted_time = state.available_times.find((_, idx) => {
        return idx === time_idx
      })
      if (targeted_time) {
        if (targeted_time.timeline === 'AM') {
          targeted_time.timeline = 'PM'
        } else {
          targeted_time.timeline = 'AM'
        }
      }
    },
    toggle_social_link: (state, { payload }) => {
      const { platform, color }: socials_type = payload
      const already_added_social = state.social_links.find((link) => {
        return link.platform === platform
      })
      if (already_added_social) {
        state.social_links = state.social_links.filter((link) => {
          return link.platform !== already_added_social.platform
        })
      } else {
        state.social_links = [
          ...state.social_links,
          { platform, color, account_link: '' },
        ]
      }
      console.log(state.social_links)
    },
    change_social_link_value: (state, { payload }) => {
      const { platform, value }: { platform: string; value: string } = payload
      const platform_to_change = state.social_links.find((link) => {
        return link.platform === platform
      })
      if (platform_to_change) {
        platform_to_change.account_link = value
      }
    },
  },
})

export default doctor_slice.reducer

export const {
  toggle_service,
  input_charge,
  add_available_time,
  change_time,
  toggle_timeline,
  remove_available_time,
  toggle_social_link,
  change_social_link_value,
} = doctor_slice.actions
