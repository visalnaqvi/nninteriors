import Footer from '../comps/footer'
import Navigation from '../comps/nav'
import '../styles/globals.css'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return(
    <><Script
    type="module"
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
  ></Script>
  <Script
    nomodule
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
  ></Script>
          <Navigation></Navigation>
          <Component {...pageProps} />
          <Footer></Footer>
    </>
  )
  
}

export default MyApp
