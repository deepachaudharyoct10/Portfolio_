import React from 'react'
import {Link} from 'react-scroll'
import Deepaimg from '../assets/Deepaimg.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white '>
        <div className='max-w-scree-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a <span className="" >Frontend Developer</span></h2>
                <p className='text-gray-500 py-4 max-w-md'>As a student, I enthusiastic to learn new technology. My commitment to mastering both technical and interpersonal abilities ensures that I can work effectively in diverse teams, communicate complex ideas clearly, and adapt to evolving environments.My dedication to continuous improvement and my expertise in both technical and soft skills set me apart in the competitive field of computer science.</p>
                
                <div>
                    
                    <Link  to ='project' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Project 
                        <spna className="group-hover:rotate-90 duration-300 p-1"><FaLongArrowAltRight ></FaLongArrowAltRight></spna></Link>
                </div>
            </div>
            <div>
                <img src={Deepaimg} alt="" className='rounded-2xl mx-auto w-2/3 h-64  md:w-full'></img>
            </div>
        </div>
    </div>
  )
}

export default Home;
