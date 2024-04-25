import { useContext } from "react"
import { Context } from "../context/AppContext"

export const NavbarMobile = () => {
    const { toggleOpen,setToggleOpen } = useContext(Context) as { toggleOpen:boolean;setToggleOpen:(toggleOpen:boolean)=>void }
    const styleToggle = toggleOpen? 'fixed':'hidden'
  return (
    <nav className={`${styleToggle} top-0 right-0 h-screen w-80 z-10 mobileLg:hidden flex flex-col bg-grayMain text-white p-14`}>
        <ul className="list-none flex flex-col gap-3 text-3xl font-light mt-20 ms-5">
          <li onClick={()=>setToggleOpen(false)}><a href="#">Home</a></li>
          <li onClick={()=>setToggleOpen(false)}><a href="#proyects">Proyectos</a></li>
          <li onClick={()=>setToggleOpen(false)}><a href="#aboutMe">Sobre mí</a></li>
          <li onClick={()=>setToggleOpen(false)}><a href="#contact">Contacto</a></li>
        </ul>
    </nav>
  )
}
