import Loader from '@/components/Loader'
import {ThemeProvider} from 'next-themes'
import App from 'next/app'
import {Router} from 'next/router'
import {useState} from 'react'
import {Toaster} from 'react-hot-toast'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setInterval(function () {
      setLoading(false)
    }, 1000)
  })

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          {getLayout(<Component {...pageProps} />)}
        </>
      )}
    </ThemeProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return {...appProps}
}

export default MyApp
