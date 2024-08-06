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

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.transition-opacity').classList.remove('opacity-0');
    }, 100);
  }, []);

  return (
    <div className={`transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Ankit Devalla Portfolio</title>
        <meta name="description" content="Ankit Devalla's Website"></meta>
        <link rel="icon" href="/avatar.jpg" />
      </Head>
      <main className='dark:bg-gradient-dark bg-gradient-light'>
        <section className='min-h-screen transition-opacity ease-in duration-700 opacity-0'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-sans px-5'>ankitdevalla.com</h1>
            <ul className='flex items-center'>
              <li
                className={`mr-4 px-4 cursor-pointer ${activeTab === 'Internships' ? 'font-bold' : ''}`}
                onClick={() => setActiveTab('Internships')}
              >
                Internships
              </li>
              <li
                className={`mr-4 px-4 cursor-pointer ${activeTab === 'Projects' ? 'font-bold' : ''}`}
                onClick={() => setActiveTab('Projects')}
              >
                Projects
              </li>
              <li className='mr-4 px-4'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' />
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl text-blue-400 font-medium'>Ankit Devalla</h2>
            <h3 className='text-xl py-5'>Full Stack Developer and Software Engineer</h3>
            <p className='text-md py-2 leading-5 text-gray-600'>
              Hi! I'm a student at UT Austin studying CS and Statistics. I'm interested in <br />
              Machine learning, Space, and Financial Technology<br />
              Here are my links!
            </p>
          </div>
          <div className='flex justify-center text-5xl gap-16 py-3 text-gray-600'>
            <a href='mailto:devalla.ankit@gmail.com'>
              <AiFillMail className='text-4xl m-4' />
            </a>
            <a href='https://www.linkedin.com/in/ankit-devalla/'>
              <AiFillLinkedin className='text-4xl m-4' />
            </a>
            <a href='https://github.com/ankitdevalla'>
              <AiFillGithub className='text-4xl m-4' />
            </a>
            <a href='https://docs.google.com/document/d/19W-2Omghhx8s_tD5q0sNNCOZRU5XWq641uwVm1SjBv0/view?usp=sharing'>
              <AiFillFile className='text-4xl m-4' />
            </a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-blue-300 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={avatar} layout="fill" objectFit='cover' />
          </div>
        </section>

        {/* Render the component based on the active tab */}
        {activeTab === 'Internships' && <Internships />}
        {activeTab === 'Projects' && <Projects />}
      </main>
    </div>
  );
}
