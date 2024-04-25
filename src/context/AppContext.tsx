import { createContext, useState } from 'react'
export const Context = createContext({})
export const AppContext:React.FC<{children:JSX.Element|JSX.Element[]}> = ({children}) => {
  const [ toggleOpen,setToggleOpen ] = useState(false)
  return (
    <Context.Provider value={{toggleOpen,setToggleOpen}}>
        {children}
    </Context.Provider>
  )
}
