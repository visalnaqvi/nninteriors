import Footer from '../comps/footer'
import Navigation from '../comps/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
          <Navigation></Navigation>
          <Component {...pageProps} />
          <Footer></Footer>
    </>
  )
  
}

export default MyApp
