import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import { motion } from 'framer-motion'
import Link from 'next/link'


type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, get ready to be amazed!", 
            "Welcome to Damau Milk Farm", 
            "Nature's Bounty Delivered Fresh"
        ],
        loop:true,
        delaySpeed: 2000,
    }) 
  return (
        <motion.div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-40">
          <BackgroundCircles />
          <img src="./banner/1.jpg" className="relative rounded-full h-32 w-32 mx-auto object-cover"/>
         <div className="z-20">
            <h2 className="uppercase text-gray-500 tracking-[15px]">Agriculture</h2>
            <h1 className="text-3xl lg:text-5xl font-semibold px-10">
                <span>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>

            <div className="my-4">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Facilities</button>
                </Link>
                <Link href="#contact">
                    <button className="heroButton">Contact Us</button>
                </Link>
            </div>
         </div>
        </motion.div>
  )
}

export default Hero