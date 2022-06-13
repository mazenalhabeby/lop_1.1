import {useRouter} from 'next/router'
import React, {useEffect} from 'react'

function ContainerLayout({children}) {
  const {locale} = useRouter()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])

  return <main>{children}</main>
}

export default ContainerLayout
