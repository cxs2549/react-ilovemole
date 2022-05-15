import "../styles/globals.css"
import Navbar from "../components/Navbar"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
