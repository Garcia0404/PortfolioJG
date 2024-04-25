import ReactDOM from 'react-dom/client'
import './index.css'
import { AboutMe, Footer, Header,Main,Proyects,Contact, NavbarMobile,Toggle } from './components'
import { AppContext } from './context/AppContext'

const linkedin = 'https://linkedin.com/in/julio-garcia-51a4a3243'
const github = 'https://github.com/Garcia0404'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContext>
    <Header title='JG'/>
    <Toggle/>
    <NavbarMobile/>
    <Main name='Julio' linkedin={linkedin} github={github}/>
    <Proyects/>
    <AboutMe/>
    <Contact/>
    <Footer github={github} linkedin={linkedin}/>
  </AppContext>,
)
