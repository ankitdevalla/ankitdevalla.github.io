'use client'
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillFile } from 'react-icons/ai';
import Image from 'next/image';
import avatar from '../public/avatar.jpg';
import { useEffect, useState } from 'react';
import Internships from './internships';
import Projects from './projects';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('Internships');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.transition-opacity').classList.remove('opacity-0');
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <div className={`transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Ankit Devalla Portfolio</title>
        <meta name="description" content="Ankit Devalla's Website"></meta>
        <link rel="icon" href="/avatar.jpg" />
      </Head>
      <main className='bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800'>
        <section className={`min-h-screen transition-all duration-1000 ${isLoading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          <nav className='py-6 mb-8 flex justify-between items-center backdrop-blur-sm bg-white/30 dark:bg-black/30 sticky top-0 z-50 px-5'>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform'>
              ankitdevalla.com
            </h1>
            <ul className='flex items-center space-x-6'>
              <li
                className={`px-4 py-2 cursor-pointer transition-all duration-300 hover:text-blue-500 rounded-lg text-black dark:text-white
                  ${activeTab === 'Internships' ? 'bg-blue-100 dark:bg-blue-900 font-bold' : ''}`}
                onClick={() => setActiveTab('Internships')}
              >
                Internships
              </li>
              <li
                className={`px-4 py-2 cursor-pointer transition-all duration-300 hover:text-blue-500 rounded-lg text-black dark:text-white
                  ${activeTab === 'Projects' ? 'bg-blue-100 dark:bg-blue-900 font-bold' : ''}`}
                onClick={() => setActiveTab('Projects')}
              >
                Projects
              </li>
              <li className='px-4'>
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className='cursor-pointer text-2xl hover:rotate-45 transition-transform duration-300 hover:text-yellow-500 text-black dark:text-white' 
                />
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 space-y-6'>
            <h2 className='text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform'>
              Ankit Devalla
            </h2>
            <h3 className='text-2xl py-3 text-gray-700 dark:text-gray-300'>
              Full Stack Developer and Software Engineer
            </h3>
            <p className='text-lg py-2 leading-7 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Hi! I'm a student at UT Austin studying CS and Statistics. I'm passionate about
              <span className='text-blue-500 font-semibold'> Machine Learning</span>,
              <span className='text-purple-500 font-semibold'> Space</span>, and
              <span className='text-green-500 font-semibold'> Financial Technology</span>.
              <br />Connect with me below!
            </p>
          </div>
          <div className='flex justify-center gap-8 py-3'>
            <a href='mailto:devalla.ankit@gmail.com' className='transform hover:scale-125 transition-transform duration-300'>
              <AiFillMail className='text-4xl text-red-500 hover:text-red-600' />
            </a>
            <a href='https://www.linkedin.com/in/ankit-devalla/' className='transform hover:scale-125 transition-transform duration-300'>
              <AiFillLinkedin className='text-4xl text-blue-500 hover:text-blue-600' />
            </a>
            <a href='https://github.com/ankitdevalla' className='transform hover:scale-125 transition-transform duration-300'>
              <AiFillGithub className='text-4xl text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400' />
            </a>
            <a href='https://docs.google.com/document/d/19W-2Omghhx8s_tD5q0sNNCOZRU5XWq641uwVm1SjBv0/view?usp=sharing' className='transform hover:scale-125 transition-transform duration-300'>
              <AiFillFile className='text-4xl text-green-500 hover:text-green-600' />
            </a>
          </div>
          <div className='relative mx-auto w-80 h-80 mt-12 group cursor-pointer'>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse'></div>
            <div className='relative w-full h-full rounded-full overflow-hidden transform group-hover:scale-105 transition-transform duration-300'>
              <Image src={avatar} layout="fill" objectFit='cover' className='rounded-full' />
            </div>
          </div>
        </section>

        <div className='transition-opacity duration-500'>
          {activeTab === 'Internships' && <Internships />}
          {activeTab === 'Projects' && <Projects />}
        </div>
      </main>
    </div>
  );
}
