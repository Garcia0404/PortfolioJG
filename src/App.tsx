import { useContext } from 'react'
import { AboutMe, Footer, Header, Main, Proyects, Contact, NavbarMobile, Toggle } from './components'
import { Context } from './context/AppContext'
import { AnimatePresence } from 'framer-motion'
const linkedin = 'https://linkedin.com/in/julio-garcia-51a4a3243'
const github = 'https://github.com/Garcia0404'
export const App = () => {
    const { toggleOpen } = useContext(Context) as { toggleOpen: boolean }
    return (
        <>
            <Header title='JG' />
            <Toggle />
            <AnimatePresence mode='wait'>
                {toggleOpen && <NavbarMobile />}
            </AnimatePresence>
            <Main name='Julio' linkedin={linkedin} github={github} />
            <Proyects />
            <AboutMe />
            <Contact />
            <Footer github={github} linkedin={linkedin} />
        </>
    )
}
