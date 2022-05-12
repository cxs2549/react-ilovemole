import Link from "next/link"
import { useState } from "react"
import HamburgerMenu from "react-hamburger-menu"
import { CSSTransition } from "react-transition-group"

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    "home",
    "restaurant",
    "menu",
    "shop",
    "goldbelly",
    "gift cards",
    "cook book",
    "take out",
    "delivery",
    "careers",
    "contact",
    "press",
  ]
  const handleClick = () => {
    setTimeout(() => setIsOpen(false), 100)
    console.log(isOpen)
  }
  const Menu = () => (
    <div className="fixed right-0 top-24 w-[70%] bg-navbar h-screen px-4 pt-6 z-20 overflow-y-scroll pb-24">
      <div className="flex flex-col gap-4">
        {links.map((link, index) => (
          <Link href={index === 0 ? "/" : `${link}`} key={index}>
            <span
              onClick={handleClick}
              className="uppercase font-semibold text-2xl cursor-pointer"
            >
              {link}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
  const Overlay = () => (
    <div
      className="fixed left-0 top-24 w-full bg-black h-screen cursor-pointer z-10 opacity-50"
      onClick={handleOpen}
    ></div>
  )
  const handleOpen = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle("no-flow")
  }
  return (
    <div>
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={handleOpen}
        width={22}
        height={14}
        strokeWidth={3}
        rotate={0}
        color="white"
        borderRadius={3}
        animationDuration={0.5}
        className="cursor-pointer"
      />
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="burger"
        unmountOnExit
      >
        <Menu />
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="overlay"
        unmountOnExit
      >
        <Overlay />
      </CSSTransition>
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className="bg-navbar text-white flex justify-between items-center px-4 h-24">
      <Link href="/" className="self-center">
        <img
          src="images/logo.png"
          alt="logo"
          className="w-[171px] h-[50px]  cursor-pointer"
        />
      </Link>
      <Burger />
    </nav>
  )
}
export default Navbar
