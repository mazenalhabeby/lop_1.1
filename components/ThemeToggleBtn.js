import {IconButton} from '@mui/material'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'
import {HiMoon, HiSun} from 'react-icons/hi'

const ThemeToggleBtn = () => {
  const [mounted, setMounted] = useState(false)
  const {systemTheme, theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <IconButton onClick={() => setTheme('light')}>
          <HiSun className="h-6 w-6 text-slate-100" role="button" />
        </IconButton>
      )
    } else {
      return (
        <IconButton onClick={() => setTheme('dark')}>
          <HiMoon
            className=" h-6 w-6 text-slate-100 md:text-slate-700"
            role="button"
          />
        </IconButton>
      )
    }
  }
  return <div>{renderThemeChanger()}</div>
}

export default ThemeToggleBtn
