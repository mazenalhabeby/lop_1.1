import {IconButton} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {MdClose, MdMenu} from 'react-icons/md'
import ThemeToggleBtn from '../ThemeToggleBtn'
import LinksComponent from './LinksComponent'

const MainNavbar = ({links}) => {
  const [click, setClick] = useState(false)
  const [clientWindowHeight, setClientWindowHeight] = useState(0)

  const handleClick = () => setClick(!click)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  return (
    <nav
      className={`${
        clientWindowHeight >= 32 ? 'fixed top-0' : 'relative'
      } z-[2] h-11 w-full bg-slate-200 dark:bg-slate-900`}>
      <div className=" container mx-auto px-4">
        <div className="flex felx-row gap-2">
          <div className="block lg:hidden">
            <IconButton
              onClick={handleClick}
              className="text-slate-800 dark:text-white">
              {click ? <MdClose /> : <MdMenu />}
            </IconButton>
          </div>
          <Link href={'/'}>
            <a>
              <div className="rounded-br-3xl rounded-bl-3xl bg-slate-700 p-2 shadow-xl hover:bg-slate-600 absolute top-0 z-[5]">
                <Image
                  src={'/images/lop.png'}
                  width={90}
                  height={60}
                  alt={'lop'}
                  priority
                />
              </div>
            </a>
          </Link>
        </div>
        <div
          className={`${
            click ? 'left-0 right-0' : '-left-full -right-full'
          } absolute w-1/2 transition-all duration-500 ease-in-out lg:static lg:top-0 lg:h-auto lg:w-auto mt-2 md:mt-0 text-slate-100 md:text-slate-800 dark:md:text-slate-100`}>
          <div className="flex flex-col md:flex-row w-full h-[60vh] md:h-auto drop-sm bg-black/60 md:bg-transparent">
            <LinksComponent links={links} />
            <div className="flex flex-row justify-end gap-2 items-center px-4">
              <ThemeToggleBtn />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar
