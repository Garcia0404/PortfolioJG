import { motion } from "framer-motion"
import { menuSlide } from "../anim"
import { Links } from "./Links"
import { Svg } from "./SvgMenu"

export const NavbarMobile = () => {
    const links = [
      {
        title:'Home',
        href:'#'
      },
      {
        title:'Proyectos',
        href:'#proyects'
      },
      {
        title:'Sobre mí',
        href:'#aboutMe'
      },
      {
        title:'Contacto',
        href:'#contact'
      }

    ]
  return (
    <motion.nav 
      variants={menuSlide}
      animate='enter'
      exit='exit'
      initial='initial'
      className={`fixed top-0 right-0 h-screen w-80 z-10 mobileLg:hidden flex flex-col bg-grayMain text-white p-14`}>
        <Svg/>
        <ul 
          className="list-none flex flex-col gap-3 text-3xl font-light mt-20 ms-5">
          {
            links.map((link,index)=>(
              <Links key={index} index={index} href={link.href} title={link.title}/>
            ))
          }
        </ul>
    </motion.nav>
  )
}
