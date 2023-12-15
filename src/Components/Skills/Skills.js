import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function skills(){
    return(
        <>
        <div className='skillsContainer bg-white'>
            <div className="titleSkills flex justify-center items-center ">
                <h1 className='inline-block font-bold mt-7 text-3xl titleSkillsContent '>Skills</h1>
            </div>

            
            <div className="iconArea grid grid-cols-4 gap-12 mt-16">
                <dev className='flex justify-center align-middle'><FaHtml5 className='text-6xl' title='HTML5' /></dev>
                <dev className='flex justify-center align-middle'><FaCss3 className='text-6xl' title='Css'/></dev>
                <dev className='flex justify-center align-middle'><IoLogoJavascript className='text-6xl' title='JavaScript'/></dev>
                <dev className='flex justify-center align-middle'><FaBootstrap className='text-6xl' title='Bootstrap'/></dev>
                <dev className='flex justify-center align-middle'><SiTailwindcss className='text-6xl' title='Tailwind'/></dev>
                <dev className='flex justify-center align-middle'><SiTypescript className='text-6xl' title='TypeScript'/></dev>
                <dev className='flex justify-center align-middle'><FaSass className='text-6xl' title='Sass'/></dev>
                <dev className='flex justify-center align-middle'><FaReact className='text-6xl' title='React Js'/></dev>
                <dev className='flex justify-center align-middle'><FaVuejs className='text-6xl' title='Vue Js'/></dev>
                <dev className='flex justify-center align-middle'><SiRedux className='text-6xl' title='Redux'/></dev>
                <dev className='flex justify-center align-middle'><FaGit className='text-6xl' title='Git'/></dev>
                <dev className='flex justify-center align-middle'><FaGithub className='text-6xl' title='Github'/></dev>


            </div>
            
        </div>
        </>


    )
}

export default skills ;