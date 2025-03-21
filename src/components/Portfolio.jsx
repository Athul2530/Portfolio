import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project5 from "../assets/project4.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "Question Paper Generator Using Mern Stack Development",
      links: {
        github: "https://github.com/Athul2530/Question_paper_generator",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "Event Management System Using Mern Stack Devolopment",
      links: {
        site: "#",
        github: "",
      },
    },
    {
      img: project3,
      title: "Project #3",
      description: "Hand_recongition_system using OpenCV and MediaPipe",
      links: {
        site: "#",
        github: "https://github.com/Athul2530/HandImage_detection_system",
      },
    },
    {
      img: project5,
      title: "Project #4",
      description: "NetFlix Data Analysis Project Using Python Libaries",
      links: {
        site: "#",
        github: "https://github.com/Athul2530/CODTECH-Task-2",
      },
    },
    
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio