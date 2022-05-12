import { motion } from "framer-motion"
import Head from "next/head"

const Meta = ({ title, description, keywords }) => (
  <Head>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="stylesheet" href="https://unpkg.com/open-props" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/open-props/normalize.min.css"
    />
    <title>{title}</title>
  </Head>
)

Meta.defaultProps = {
  title: "Guelagüetzal Restaurant - Built w React",
  keywords: "mexican, tacos, burritos",
  description: "Fine Mexican food from Guelagüetzal.",
}

const Layout = ({ title, description, keywords, children, direction }) => {
  const variants = {
    hidden: { opacity: 0, y: "-10px" },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "10px" },
  }
  const variantsLeft = {
    hidden: { y: 0, x: "100%" },
    enter: { y: 0, x: 0 },
    exit: { y: 0, x: "100%" },
  }
  return (
    <>
      <Meta title={title} description={description} keywords={keywords} />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={direction ? variantsLeft : variants}
        transition={{ type: "linear", duration: 0.25 }}
        className="flex flex-col gap-12 "
      >
        {children}
      </motion.main>
    </>
  )
}
export default Layout
