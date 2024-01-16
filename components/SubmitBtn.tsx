import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-stone-700 text-stone-100 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-stone-900 hover:text-stone-100'
    >
      Submit{' '}
      <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ' />
    </button>
  )
}
