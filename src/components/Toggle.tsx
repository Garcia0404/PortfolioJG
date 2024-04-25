import { useContext } from "react"
import { Context } from "../context/AppContext"
export const Toggle = () => {
    const { toggleOpen,setToggleOpen } = useContext(Context) as {toggleOpen:boolean;setToggleOpen:(toggleOpen:boolean)=>void}
    const handleClick = () => {
        setToggleOpen(!toggleOpen)
        document.body.style.overflowY='hidden'
    }
    if(toggleOpen){
        document.body.style.overflowY='hidden'
    }else{
        document.body.style.overflowY='auto'
    }
    const toggleStyle1 = toggleOpen ? '-rotate-45 bg-white' : 'bg-grayMain'
    const toggleStyle2 = toggleOpen ? 'opacity-0 bg-white' : 'bg-grayMain'
    const toggleStyle3 = toggleOpen ? 'rotate-45 bg-white' : 'bg-grayMain'
    return (
        <div className="fixed top-0 right-0 h-min w-min m-7 mobileLg:hidden z-30" onClick={handleClick}>
            <button aria-label="Abrir Menu" className="flex flex-col w-[30px] gap-[9px]">
                <div className={`h-[2px] w-full origin-right transition-all duration-300 rounded-md ${toggleStyle1}`}></div>
                <div className={`h-[2px] w-full origin-right transition-all duration-300 rounded-md ${toggleStyle2}`}></div>
                <div className={`h-[2px] w-full origin-right transition-all duration-300 rounded-md ${toggleStyle3}`}></div>
            </button>
        </div>
    )
}
