import {ClickAwayListener} from '@mui/material'
import {Box} from '@mui/system'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {MdExpandLess, MdExpandMore, MdTranslate} from 'react-icons/md'

const LangToggleBtn = () => {
  const router = useRouter()

  const {locale} = router

  const currentLang =
    locale === 'en' ? 'ENGLISH' : locale === 'ar' ? 'العربية' : undefined

  const langauge = [
    {
      code: 'en',
      name: 'ENGLISH',
      country_code: 'en',
    },
  ]

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box className=" relative flex items-center">
        <button
          type="button"
          onClick={handleClick}
          className="flex felx-row items-center gap-1">
          <MdTranslate className="w-6 h-6" />
          <span className="ltr:tracking-widest rtl:tracking-normal">
            {currentLang}
          </span>
          {open ? (
            <MdExpandLess className="w-6 h-6" />
          ) : (
            <MdExpandMore className="w-6 h-6" />
          )}
        </button>
        {open ? (
          <Box className="absolute top-9 right-0 left-0 z-[99] divide-y-[1px] divide-yellow-400 rounded-b-lg p-2 shadow-xl text-slate-100 dropgray-bg bg-slate-700 md:bg-slate-700/60">
            {langauge.map((obj) => (
              <Link
                href={router.asPath}
                locale={obj.code}
                key={obj.country_code}>
                <a
                  onClick={handleClick}
                  className="block w-full text-center transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white">
                  {obj.name}
                </a>
              </Link>
            ))}
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  )
}

export default LangToggleBtn
