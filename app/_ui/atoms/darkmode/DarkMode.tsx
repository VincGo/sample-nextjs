"use client"

import {useState, useEffect, ReactElement} from 'react'
import { useTheme } from 'next-themes'

const DarkModeButton = (): ReactElement | null => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect((): void => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleTheme = (): void => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <button onClick={handleTheme}>
        {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  )
}

export default DarkModeButton
