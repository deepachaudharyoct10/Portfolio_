import React from 'react'
import model from '../assets/model.png'
import modern_chair from '../assets/modern_chair.png'
import password_generator from '../assets/password_generator.png'
import tour from '../assets/tour.png'
import swiggy_clone from '../assets/swiggy_clone.png'
import swiggy_clone_menu from '../assets/swiggy_clone_menu.png'
const Project = () => {

  const projects=[
    {
      id:1,
      src:swiggy_clone,
      codes:'/updatedsoon'
      
    },
    {
      id:2,
      src:tour,
      codes:'https://github.com/deepachaudharyoct10/Tour.git'
    },
    {
      id:3,
      src:password_generator,
      codes:'https://github.com/deepachaudharyoct10/PASSWORD-GENERATOR-APP.git'
    },
    {
      id:4,
      src:model,
      codes:'https://github.com/deepachaudharyoct10/Modal.git',
    
    },
    {
      id:5,
      src:modern_chair,
      codes:'https://github.com/deepachaudharyoct10/Modern-chair...git'
    },
    {
      id:6,
      src:swiggy_clone_menu,
      codes:'updatedsoon'
    }
  ]
  return (
    <div name="project" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
     
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        <p className='py-6'>Check Out some of my work right here</p>
      </div>

     



<div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

{
        projects.map(({id,src,codes})=> (
          <div key={id}   className='shadow-md shadow-gray-600 rounded-lg'>
          <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'></img>
          <div className='flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 bg-gray-700 rounded-xl shadow-lg  hover:scale-105'>Demo</button>
          <button className='w-1/2 px-6 py-3 m-4 bg-gray-700 rounded-xl shadow-lg  duration-200 hover:scale-105' onClick={()=>window.open(codes, '_blank')}>Code</button>
         
          </div>
          
        </div>
        ))
      }

         
        </div>

     </div>

    </div>
  )
}

export default Project