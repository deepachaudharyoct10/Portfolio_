import React from 'react'
import cnew from '../assets/cnew.jpg'
import pythonimg from '../assets/pythonimg.jpg'
import cpp from '../assets/cpp.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'


const Skills = () => {

  const skill=[
    {
      id:1,
      src:html,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:css,
      title:"CSS",
      style:'shadow-blue-500'

    },
    {
      id:3,
      src:javascript,
      title:"Javascript",
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:react,
      title:"React",
      style:'shadow-blue-600'
    },
    {
      id:5,
      src:tailwind,
      title:"Tailwind",
      style:'shadow-sky-400'
    },
    {
      id:6,
      src:github,
      title:"Github",
      style:'shadow-gray-400'
    }
    ,
    {
      id:7,
      src:cnew,
      title:"C",
      style:'shadow-red-800',

    }
    ,
    {
      id:8,
      src:pythonimg,
      title:"Python",
      style:'shadow-yellow-800',
    }
    ,
    {
      id:9,
      src:cpp,
      title:"C++",
      style:'shadow-cyan-500'
    }
  ]
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Skills</p>
          <p className='py-6'>These are the technology I've Work with</p>
        </div>
        <div className='w-full grid grid-cols2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
      {
        skill.map(({id,src,title,style})=> (
          <div  key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className='w-20 mx-auto'></img>
            <p className='mt-4'>{title}</p>
          </div>
        ))
      }


          
        </div>
      </div>
    </div>
  )
}

export default Skills