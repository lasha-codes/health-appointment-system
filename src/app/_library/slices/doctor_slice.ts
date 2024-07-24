import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { service_type } from '@/data/services/services'
import toast from 'react-hot-toast'
import { Doctor } from '@prisma/client'
import axios from 'axios'

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
  doctor_profile: Doctor | null
  selected_services: service_type[]
  available_times: times[]
  social_links: socials_type[]
  delete_toggle: boolean
  doctor_loaded: boolean
}

const initial_state: state_type = {
  doctor_profile: null,
  selected_services: [],
  available_times: [{ timeline: 'AM', time: null }],
  social_links: [],
  delete_toggle: false,
  doctor_loaded: false,
}

export const get_doctor_profile = createAsyncThunk(
  'fetch_profile',
  async () => {
    try {
      const {
        data: { profile },
      } = await axios.get('/api/doctors')
      return profile
    } catch (err: any) {
      toast.error(err.message)
    }
  }
)

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
    reset_state: (state) => {
      state.selected_services = []
      state.available_times = [{ timeline: 'AM', time: null }]
      state.social_links = []
    },
    set_doctor: (state, { payload }) => {
      state.doctor_profile = payload
    },
    toggle_delete_box: (
      state,
      { payload: { bool } }: { payload: { bool: boolean } }
    ) => {
      state.delete_toggle = bool
    },
    delete_doctor_profile: (state) => {
      state.doctor_profile = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_doctor_profile.rejected, (state) => {
      state.doctor_profile = null
      state.doctor_loaded = true
    })
    builder.addCase(
      get_doctor_profile.fulfilled,
      (state, { payload }: { payload: Doctor | null }) => {
        state.doctor_profile = payload
        state.doctor_loaded = true
      }
    )
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
  reset_state,
  set_doctor,
  toggle_delete_box,
  delete_doctor_profile,
} = doctor_slice.actions
