import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll'
const NavBar = () => {

    const [nav, setNav]= useState(false);
    const links=[{
        id:1,
        link:'home'
    },
    
        {
            id:2,
            link: 'about'
        },
        {
            id:3,
            link: 'project'
        },
        {
        id:4,
        link: 'skills'
    },
    {
        id:5,
        link: 'contact'
    },
]
  return (
    <div className='flex justify-between items-center w-full h-20 bg-black text-white fixed px-4'>
        <div>
            <h1 className='text-5xl  ml-2 font-serif'>Deepa</h1>
        </div>
        <ul className='hidden md:flex'>

            {
                links.map(({id,link}) =>{
                 return   <li key ={id} className='px-4 cursor-pointer capitalize  text-gray-500 font-md hover:scale-105 duration-200'><Link to={link} smooth duration={500}>{link} </Link></li>
                })
            } </ul>
    <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' onClick={()=>setNav(!nav)}>
                {nav? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
            </div>
         {/* for mobile app */}
            {nav && ( <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                 {
            links.map(({id,link}) =>{
            return <Link  key ={id} to={link}><li className='cursor-pointer px-4 capitalize py-6 text-4xl'>{link}</li> </Link>}
            )
        }
        
        </ul>)}
 </div>
  )
}
export default NavBar
