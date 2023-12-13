import './Navigation.css'
function Navigation(){
    return(
        <>
        <div className="Nav flex flex-row justify-center align-middle bg-slate-900 fixed top-0 left-0 block ">
            <div className='navItem text-yellow-50'>Home</div>
            <div className='navItem text-yellow-50'>About Me</div>
            <div className='navItem text-yellow-50'>Skills</div>
            <div className='navItem text-yellow-50'>Contact Me</div>
            
        </div>
        
        
        </>
    )
}

export default Navigation