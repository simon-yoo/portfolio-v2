import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div>
          <Image
            src='/images/simon.jpeg'
            width='192'
            height='192'
            alt='profile'
            quality='95'
            priority={true}
            className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
          />
          <span className='text-3xl'>👋</span>
        </div>
      </div>
    </section>
  )
}
