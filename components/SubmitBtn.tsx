import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-stone-700 text-stone-100 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-stone-900 hover:text-stone-100 disabled:scale-100 disabled:bg-opacity-65 dark:bg-stone-700/80 dark:hover:bg-stone-100/80 dark:hover:text-stone-700'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ' />
        </>
      )}
    </button>
  )
}
