import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function About({}: Props) {
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
        viewport={{
            once: true,
        }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-20">
        <h3 className="absolute md:text-gray-600 top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img 
        initial={{
            x:-200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        viewport={{
            once: true,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="./about/about.jpg" alt="" />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50 ">brief</span>{" "} background</h4>
            <p className="text-base">
            Welcome to Damau Milk Farm, your destination for the purest and most delightful milk in Kaduna, Nigeria. Situated amidst the serene beauty of our region, our farm embodies a harmonious blend of traditional dairy farming practices and modern innovations. With unwavering dedication to excellence and a strong commitment to sustainability, we bring you the finest, most nutritious, and delicious milk straight from our farm to your table.
            </p>
            {/* <p className="text-base">
            Nestled within sprawling acres of lush green pastures, Damau Milk Farm offers a haven for our contented cows. We prioritize their welfare, ensuring a nurturing environment that allows them to thrive. Our team of skilled farmers employs ethical practices, providing our cows with a stress-free and comfortable existence. With ample space for grazing and leisurely strolls, our cows produce milk that is naturally flavorful and rich in essential nutrients.
            </p> */}
            {/* <p className="text-base">
            Discover the abundance of Damau Milk Farm and bring the taste of nature's bounty to your home. Place your order today to experience the unmatched freshness and quality of our dairy products. We offer convenient delivery options to ensure your utmost satisfaction. Embark on this journey of nourishment and sustainability with us. Together, let's create a healthier and happier future, one glass of milk at a time.
            </p> */}

        </div>
    </motion.div>
  )
}

export default About