import './Home.css'

function Home(){
    return(
        <>
        <div className='Home  flex flex-row justify-between'>
            <div className=''>
                <h1 className='text-9xl mt-24 ms-12  mb-12 font-bold'>Hi ,</h1>
                <p className='text-6xl ms-12 mb-11'>My Name is <span className='text-9xl ms-5 fontName font-bold text-green-800'>amin</span></p>
                <button className='btn text-green-600 outline outline-1 p-2 ms-12 hover:bg-green-600 hover:text-white btnDownload hover:outline-green-600 rounded-xl' href='#' download>Donload Resume</button>
            </div>
            <div>
                
            </div>
        </div>

        </>
    )
}

export default Home