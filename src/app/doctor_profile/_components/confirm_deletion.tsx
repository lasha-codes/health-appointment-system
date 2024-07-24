'use client'
import { useSelector, useDispatch } from 'react-redux'
import { toggle_delete_box } from '@/app/_library/slices/doctor_slice'

const ConfirmDeletionBox = () => {
  const dispatch = useDispatch()
  const { delete_toggle } = useSelector((state: any) => state.doctor)
  return (
    <div
      className={`fixed left-1/2 ${
        delete_toggle
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      } top-1/2 bg-white shadow-lg shadow-gray-500/50 w-[350px] -translate-x-[50%] -translate-y-[20%] flex flex-col transition-all duration-200 gap-5 rounded-xl items-start px-5 py-4 z-[10]`}
    >
      <h4 className='font-medium text-lg text-zinc-600'>
        Are u sure that u want to delete your doctor account ?
      </h4>
      <div className='flex w-full items-center justify-between'>
        <button
          onClick={() => {
            dispatch(toggle_delete_box({ bool: false }))
          }}
          className='bg-red-800 hover:bg-red-900 transition-all duration-300 ease-linear text-white px-6 py-1.5 rounded-lg'
        >
          Confirm
        </button>
        <button
          onClick={() => dispatch(toggle_delete_box({ bool: false }))}
          className='hover:underline'
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ConfirmDeletionBox
