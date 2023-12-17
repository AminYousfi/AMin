import { useEffect } from 'react'
import './Navigation.css'

function Navigation(){
let scrollHome = ()=>{
    window.scrollTo({ top: 0, behavior: "smooth" })
}
let scrollAboutMe = ()=>{
    window.scrollTo({ top: 703, behavior: "smooth" })
}
let scrollSkills = ()=>{
    window.scrollTo({ top: 1406, behavior: "smooth" })
}
    let scrollContactMe = ()=>{
        window.scrollTo({ top: 2110, behavior: "smooth" })
    }

    return(
        <>
        <div className="Nav flex flex-row justify-center align-middle bg-slate-900 sticky top-0 left-0 " >
            <div className='navItem text-yellow-50' onClick={scrollHome}>Home</div>
            <div className='navItem text-yellow-50' onClick={scrollAboutMe} >About Me</div>
            <div className='navItem text-yellow-50' onClick={scrollSkills}>Skills</div>
            <div className='navItem text-yellow-50' onClick={scrollContactMe}>Contact Me</div>
            
        </div>
        
        
        </>
    )
}

export default Navigation