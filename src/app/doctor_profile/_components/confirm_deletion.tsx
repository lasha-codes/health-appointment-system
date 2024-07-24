const ConfirmDeletionBox = () => {
  return (
    <div className='fixed left-1/2 top-1/2 bg-white shadow-lg shadow-gray-500/50 w-[350px] -translate-x-[50%] -translate-y-[30%] flex flex-col gap-5 rounded-xl items-start px-5 py-4'>
      <h4 className='font-medium text-lg text-zinc-600'>
        Are u sure that u want to delete your doctor account ?
      </h4>
      <div className='flex w-full items-center justify-between'>
        <button className='bg-red-800 hover:bg-red-900 transition-all duration-300 ease-linear text-white px-6 py-1.5 rounded-lg'>
          Confirm
        </button>
        <button className='hover:underline'>Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmDeletionBox
