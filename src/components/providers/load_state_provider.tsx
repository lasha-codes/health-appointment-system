'use client'
import { useDispatch } from 'react-redux'
import { get_doctor_profile } from '@/app/_library/slices/doctor_slice'
import { useEffect } from 'react'

const LoadStateProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_doctor_profile() as any)
  }, [])
  return <>{children}</>
}

export default LoadStateProvider
