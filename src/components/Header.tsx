import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  const toggleStyle1 = active ? '-rotate-45' : ''
  const toggleStyle2 = active ? 'opacity-0' : ''
  const toggleStyle3 = active ? 'rotate-45' : ''
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className='sticky top-0 right-0 backdrop-blur-md z-10'>
      <nav className='flex justify-between items-center p-6 mobileLg:px-12 max-w-screen-tablet mx-auto'>
        <style>
          {`
          .list-item::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #4670ff;
            transition: width 200ms linear;
          }
          .list-item:hover::before{
            width: 100%;
          }
          header{
            animation: headerScroll both;
            animation-timeline: scroll(root);
            animation-range:0 300px;
          }
          nav{
            animation: navbarScroll both;
            animation-timeline: scroll(root);
            animation-range:0 300px;
          }
          @keyframes navbarScroll{
            to{
              padding-block:12px;
            }
          }
          @keyframes headerScroll{
            to{
              background-color: rgba(255,255,255,0.5);
            }
          }
          `}
        </style>
        <h1 className='logo text-3xl border border-blueMain p-1 text-grayMain'>{title}</h1>
        <div className="toggle mobileLg:hidden" onClick={handleClick}>
          <button aria-label="Abrir Menu" className="show-menu flex flex-col w-[30px] gap-[9px]">
            <div className={`bg-grayMain h-[2px] w-full origin-right transition-all duration-300 rounded-md ${toggleStyle1}`}></div>
            <div className={`bg-grayMain h-[2px] w-full origin-right transition-all duration-300 rounded-md ${toggleStyle2}`}></div>
            <div className={`bg-grayMain h-[2px] w-full origin-right transition-all duration-300 rounded-md ${toggleStyle3}`}></div>
          </button>
        </div>
        <ul className="list-none hidden gap-4 mobileLg:flex">
          <li className='relative border-b-[2px] border-b-blueMain'><a href="#">Home</a></li>
          <li className='relative list-item'><a href="#proyects">Proyectos</a></li>
          <li className='relative list-item'><a href="#aboutMe">Sobre mí</a></li>
          <li className='relative list-item'><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}
