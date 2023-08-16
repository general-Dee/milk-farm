// import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    // <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]">
    <div className="bg-[white] text-[#8CC63F] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]">
      <Head>
        <title> Damau Milk Farm</title>
      </Head>
      
      <Header/>

      {/* hero */}
      <section id="hero" className="snap-start">
         <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer '>
        <div className='flex items-center justify-center'>
          <img 
          className='h-12 w-12 md:h-16 md:w-16 rounded-full grayscale hover:grayscale-0 cursor-pointer bg-[#F5F5DC]'
          src="./logo/logo.png" alt="" />
        </div>
      </footer>
      </Link>
    </div>
  );
};

export default HomePage;

