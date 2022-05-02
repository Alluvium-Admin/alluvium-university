// import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
// import 'bootstrap/dist/js/bootstrap';
import Script from 'next/script';
// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' />
  </>
  )
}

export default MyApp
