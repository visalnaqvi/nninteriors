import Footer from '../comps/footer'
import Navigation from '../comps/nav'
import '../styles/globals.css'
import Script from 'next/script'
import SocialWidget from '../comps/socailWidget'
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
    <Script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=G-VQHXV34632'} />
<Script strategy="lazyOnload" id="analytics">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VQHXV34632', {
        page_path: window.location.pathname,
        });
    `}
</Script>
<html lang='en'>
<SocialWidget></SocialWidget>

          <Navigation></Navigation>
          <Component {...pageProps} />
          <Footer></Footer>
          </html>
    </>
  )
  
}

export default MyApp
