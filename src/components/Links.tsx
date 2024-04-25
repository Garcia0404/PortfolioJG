import { useContext } from "react"
import { Context } from "../context/AppContext"
import { motion } from "framer-motion";
import { slide } from "../anim";

export const Links = ({ href, title,index }: { href: string; title: string;index:number }) => {
  const { setToggleOpen } = useContext(Context) as { setToggleOpen: (toggleOpen: boolean) => void }
  return (
    <motion.div
      variants={slide}
      animate='enter'
      exit='exit'
      initial='initial'
      custom={index}
    >
      <li><a onClick={() => setToggleOpen(false)} href={href}>{title}</a></li>
    </motion.div>

  )
}
