
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import { useEffect } from 'react';






function App() {
  useEffect(()=>{
    console.log(window.scrollY);

})



  return(
    <>
    <Navigation  />
    <Home  />
    <About />
    <Skills />
    <Contact />
    </>
  )
}

export default App;
