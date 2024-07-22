'use client'
import { Provider } from 'react-redux'
import store from '@/app/_library/store/store'
import LoadStateProvider from './load_state_provider'

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <LoadStateProvider>{children}</LoadStateProvider>
    </Provider>
  )
}

export default ReduxProvider
