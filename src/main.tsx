import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AboutMe, Footer, Header,Main,Proyects,Contact } from './components'

const linkedin = 'https://linkedin.com/in/julio-garcia-51a4a3243'
const github = 'https://github.com/Garcia0404'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header title='JG'/>
    <Main name='Julio' linkedin={linkedin} github={github}/>
    <Proyects/>
    <AboutMe/>
    <Contact/>
    <Footer github={github} linkedin={linkedin}/>
  </React.StrictMode>,
)
