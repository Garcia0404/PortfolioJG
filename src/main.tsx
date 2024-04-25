import ReactDOM from 'react-dom/client'
import './index.css'
import { AppContext } from './context/AppContext'
import { App } from './App'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContext>
    <App/>
  </AppContext>,
)
