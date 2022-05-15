import { motion } from "framer-motion"
import Head from "next/head"

const Meta = ({ title, description, keywords }) => (
  <Head>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <title>{title}</title>
  </Head>
)

Meta.defaultProps = {
  title: "Guelagüetza Restaurant - Built w React",
  keywords: "mexican, tacos, burritos",
  description: "Fine Mexican food from Guelagüetza.",
}

const Layout = ({ title, description, keywords, children, direction }) => {
  const variants = {
    hidden: { opacity: 0, x: "-10px" },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  }
  const variantsLeft = {
    hidden: { y: 0, x: "100%" },
    enter: { y: 0, x: 0 },
    exit: { y: 0, x: "100%" },
  }
  return (
    <>
      <Meta title={title} description={description} keywords={keywords} />
      <div>
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear", stiffness: 600, duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-8 overflow-x-hidden"
        >
          {children}
        </motion.main>
      </div>
    </>
  )
}
export default Layout
