'use client'

import { SectionName } from '@/lib/types'
import React, { createContext, useContext, useState } from 'react'

type ActiveSectionContextProviderProps = { children: React.ReactNode }

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  // we need to keep track of this to disable the abserver temporarily when the user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error(
      'useActiveSetionContext must be used within an ActiveSectionContextProvider'
    )
  }

  return context
}
