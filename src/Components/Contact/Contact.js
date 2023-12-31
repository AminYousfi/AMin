
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { SiGmail } from "react-icons/si";


function Contact (){

    return(
        <>
        <div className="contactMeContainer bg-gray-800 w-full h-full" >
            <div className='flex justify-center items-center'><h1 className='contactTitle text-white font-bold text-3xl mt-6'>Contact Me</h1></div>
            <div className="contact flex flex-row">
                <div className="iconContact w-1/2 mt-5  flex flex-col ">
                    <div className="phone flex flex-row ms-24 mt-24">
                        <FaPhoneAlt className='text-white text-2xl mt-2'/>
                        <p className='text-white ms-2 mt-1'>+989920805878</p>
                    </div>

                    <div className='telegram flex flex-row ms-24 mt-10'>
                        <FaTelegramPlane className='text-white text-2xl mt-2'/>
                        <p className='text-white ms-2 mt-1'>@Amin_u3f</p>

                    </div>

                    <div className='Github flex flex-row ms-24 mt-10'>
                        <FaGithub className='text-white text-2xl mt-2' />
                        <p className='text-white ms-2 mt-1'>AminYousfi</p>
                    </div>

                    <div className='instagram flex flex-row ms-24 mt-10'>
                        <IoLogoInstagram className='text-white text-2xl mt-2' />
                        <p className='text-white ms-2 mt-1'>amin._usf</p>
                    </div>

                    <div className='Gmail flex flex-row ms-24 mt-10'>
                        <SiGmail className='text-white text-2xl mt-2' />
                        <p className='text-white ms-2 mt-1'>aminyousefiaaa@gmail.com</p>
                    </div>

                </div>




                <div className="rocketIcon w-1/2  mt-5 felx justify-center items-center" >
                    <xmlns version="1.0" encoding="UTF-8"/>
                    <svg width="600px" height="600px" viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
                    <title>rocket</title>
                    <g id="rocket" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(91.068233, 59.000000)">
                    <path d="M212.771747,9.70001459 L245,69 L245,69 L170,69 L202.228253,9.70001459 C203.810593,6.78850908 207.453574,5.7110075 210.36508,7.29334745 C211.382788,7.84644966 212.218645,8.68230651 212.771747,9.70001459 Z" id="Triangle" stroke="#FFFFFF" stroke-width="3"></path>
                    <path d="M177.447891,61.1151438 C177.447891,61.1151438 98.1078912,105.325144 118.587891,430.435144 L307.977891,430.435144 C307.977891,430.435144 320.777891,152.145144 238.877891,61.1151438 L177.447891,61.1151438 Z" id="Path" stroke="#FFFFFF" stroke-width="3" fill="none" fill-rule="nonzero"></path>
                    <polygon id="Path" fill="none" fill-rule="nonzero" points="158.977891 432.005144 158.977891 452.525144 151.927891 452.525144 151.927891 468.755144 135.217891 468.755144 135.217891 476.395144 291.377891 476.395144 291.377891 467.325144 273.107891 467.325144 273.107891 454.195144 265.047891 454.195144 265.047891 432.005144"></polygon>
                    <circle id="Oval" stroke="#FFFFFF" stroke-width="3" fill-rule="nonzero" cx="210.697891" cy="231.305144" r="62.41"></circle>
                    <circle id="Oval" fill="none" fill-rule="nonzero" cx="210.697891" cy="232.655144" r="51.72"></circle>
                    <circle id="Oval" stroke="#FFFFFF" stroke-width="3" fill-rule="nonzero" cx="211.217891" cy="232.655144" r="37.22"></circle>
                    <rect id="Rectangle" stroke="#FFFFFF" stroke-width="3" fill="none" fill-rule="nonzero" x="200.937891" y="351.175144" width="24.09" height="100.65" rx="8.96"></rect>
                    <path d="M240.267891,228.545144 C240.267891,228.545144 246.267891,244.825144 218.507891,261.545144 L240.267891,228.545144 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
                    <path d="M118.037891,401.515215 L21.3678912,401.515215 C16.3390825,401.529572 11.5573427,399.336114 8.2878912,395.515144 C1.2878912,387.275144 -6.4321088,371.345144 14.6478912,352.905144 C45.5078912,325.905144 113.407891,293.715144 113.407891,293.715144 L118.037891,401.515215 Z" id="Path" stroke="#FFFFFF" stroke-width="3" fill="none" fill-rule="nonzero" transform="translate(59.484829, 347.615179) rotate(1.000000) translate(-59.484829, -347.615179) "></path>
                    <path d="M425.97264,405.4786 L327.318933,403.541752 C322.290124,403.55618 317.508385,401.362722 314.238933,397.541752 C307.238933,389.301752 299.518933,373.371752 320.598933,354.931752 C351.458933,327.931752 427.052418,295.442996 427.052418,295.442996 L425.97264,405.4786 Z" id="Path-Copy" stroke="#FFFFFF" stroke-width="3" fill="none" fill-rule="nonzero" transform="translate(366.967614, 350.460798) scale(-1, 1) rotate(1.000000) translate(-366.967614, -350.460798) "></path>
                    </g>
                    </g>
                    </svg>




                </div>
            </div>
        </div>
        </>
    )


}

export default Contact ;