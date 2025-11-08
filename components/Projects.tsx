import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = [
        {
            title: "Alhaji Musa B., Kano",
            subtitle: "Best Price I’ve Seen This Season!",
            displayImg: "./projects/tes02.jpg",
            discription: "Their direct farm pricing is real. I saved ₦60,000 on two rams for our mosque event. Smooth from start to finish."
        },
        {
            title: "Chika N., Livestock Vendor, Enugu",
            subtitle: "Reliable Partner for My Meat Business",
            displayImg: "./projects/tes01.jpg",
            discription: "Reliable partner. Every goat was healthy, correctly weighed, and delivered on time. My customers were happy — I made solid profits."
        },
        {
            title: "Mrs. Rebecca O., Port Harcourt",
            subtitle: "They Made My Party a Success!",
            displayImg: "./projects/tes04.jpg",
            discription: "We ordered 3 cows for a family event. Delivery was perfectly timed and stress-free. They made our party a success!"
        },
        {
            title: "— Mrs. Adewale A., Lagos",
            subtitle: "Professional From Start to Finish!",
            displayImg: "./projects/tes06.jpg",
            discription: "Customer service was professional and responsive. I got exactly what I ordered — no excuses, no surprises."
        }
    ] 
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Real Nigerians. Real Results</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]'>
            {projects.map((project, i) => (
                <div key={i+1} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44 h-screen items-center pt-40'>
                    <motion.img
                    initial={{
                        y: -300,
                        opacity: 0,
                    }} 
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className='w-[200px] h-[200px] rounded-lg'
                    src={project.displayImg} alt="Image" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50 text-lg'>Case study {i + 1} of {projects.length}: </span>
                            {project.title}
                        </h4>

                        <p className='text-jg text-center md:text-left'>
                            {project.subtitle}
                        </p>
                        <p className='text-jg text-center md:text-left'>
                            {project.discription}
                        </p>
                    </div>
                </div>               
            ))}
        </div>

        {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div> */}
        <div className='w-full absolute top-[30%] bg-[#A67C52]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects