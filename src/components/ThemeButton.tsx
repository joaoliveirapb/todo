'use client'

import { Moon, SunMedium } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={changeTheme}
      className="absolute right-0 flex h-full items-center gap-1 rounded-xl border-2 border-zinc-300 px-3 dark:border-zinc-600"
    >
      {theme === 'light' ? (
        <>
          <Moon size={18} />
          <span className="text-sm font-medium">Dark</span>
        </>
      ) : (
        <>
          <SunMedium size={18} />
          <span className="text-sm font-medium">Light</span>
        </>
      )}
    </button>
  )
}
