import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-3xl font-bold capitalize text-stone-600 mb-8 text-center dark:text-stone-100/70'>
      {children}
    </h2>
  )
}
