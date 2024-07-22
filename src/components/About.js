import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
            </div>
            <p className='text-lg mt-20'>I am an engineering student with a current CGPA of 8.67, passionate about the world of technology and always eager to learn more. Throughout my academic journey, I have actively engaged in various projects, honing my skills in HTML, CSS, React.js, and JavaScript. These projects have not only enhanced my understanding of web development but also allowed me to create dynamic and responsive applications.</p>
            <br>
            </br>
            <p className='text-lg'> My commitment to improving my technical skills is evident from my dedication to solving over 500 DSA questions, which has significantly improved my problem-solving abilities and deepened my understanding of complex algorithms and data structures. I thrive on the challenge of learning new technologies and am always looking for opportunities to apply my knowledge in innovative ways.
            </p>
        </div>
    </div>
  )
}

export default About