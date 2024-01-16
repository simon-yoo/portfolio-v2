'use client'

import { useTheme } from '@/context/ThemeContext'
import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className='fixed top-24 right-5 md:top-6 md:right-5 bg-stone-200 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-stone-700'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}
