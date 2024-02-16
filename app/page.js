'use client'
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillMail, AiFillBook, AiFillFile } from 'react-icons/ai';
import Image from 'next/image';
import avatar from '../public/avatar.jpg';
import argo from '../public/argo.png';
import nba from '../public/nba.jpeg';
import sp from '../public/stox.jpeg';
import { useEffect, useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
   // Add this useEffect to trigger the fade-in effect
  useEffect(() => {
  // Delay the change of opacity to give time for the transition effect
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
        <section className='min-h-screen transition-opacity ease-in duration-700 opacity-0' >
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-sans px-5'>ankitdevalla.com</h1>
            <ul className='flex items-center'>
              <li className='mr-4 px-4'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'></BsFillMoonStarsFill>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl text-blue-400 font-medium'>Ankit Devalla</h2>
            <h3 className='text-xl py-5'>Full Stack Developer and Software Engineer</h3>
            <p className='text-md py-2 leading-5 text-gray-600'>
              Hi! I'm a student at UT Austin studying CS and Statistics. I'm interested in <br />
              Machine learning, Financial Technology, and Data Analytics<br />
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
              <a href = 'https://docs.google.com/document/d/19W-2Omghhx8s_tD5q0sNNCOZRU5XWq641uwVm1SjBv0/edit?usp=sharing'>
                <AiFillFile className='text-4xl m-4' />
              </a>
            </div>
          <div className='relative mx-auto bg-gradient-to-b from-blue-300 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={avatar} layout="fill" objectFit='cover'/>
          </div>
        <section className='overflow-hidden'>
          <div className='text-center p-10'>
            <h3 className='text-3xl py-1'>Projects and Experience</h3>
            <p className='text-md py-5 leading-5 text-gray-600'>
              My previous internship and projects have focused on <span className='text-blue-500'>full stack development</span><br/>
              as well as an emphasis on introductory statistical analysis and <span className='text-blue-500'>machine learning. </span><br /> 
              You can find these projects in my github!<br/>
            </p>
          </div>
          <div className='lg:grid lg:grid-cols-3 lg:gap-10 my-10 overflow-hidden'>

  <div className='text-center shadow-md px-10 rounded-xl'>
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center">
        <Image src={nba} width={250} height={250} />
      </div>
      <h3 className='text-lg font-medium pt-4 pb-2'>Advanced NBA Player Data Analysis with Machine Learning</h3>
      <ul className="list-disc list-inside mt-2 space-y-4 text-center">
        <li className="text-left">
          Utilized Python to extract and analyze NBA player statistics by applying PCA and t-SNE, visualizing this data using a scatterplot detailing intricate relationships and clusters within the dataset.
        </li>
        <li className="text-left">
          The NBA’s API was harnessed using the Requests library, and was then stored in a CSV using Pandas.
        </li>
        <li className="text-left">
          Scikit-learn’s built-in functions of PCA and t-SNE were used to transform the data and reduce dimensionality, yielding insightful data points plotted using the matplotlib library.
        </li>
      </ul>
    </div>
  </div>

  <div className='text-center shadow-md px-10 rounded-xl'>
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center">
        <Image src={argo} width={250} height={250} />
      </div>
      <h3 className='text-lg font-medium pt-4 pb-2'>Argo Data Resource Corporation SWE intern</h3>
      <ul className="list-disc list-inside mt-2 space-y-4 text-center">
        <li className="text-left">
          Developed a modern ASP.NET MVC web application for hundreds of client banks utilizing C#, JavaScript, and HTML that monitored thousands of server requests from a database.
        </li>
        <li className="text-left">
          Enhanced the UI/UX of users using a variety of technologies, such as JavaScript, HTML, and CSS, while working in an agile development environment.
        </li>
        <li className="text-left">
          Utilized C# and SQL to write programs in order to interact with large databases of workstation performance metrics to increase productivity and mitigate the risk of failure throughout 100+ banks across the country.
        </li>
      </ul>
    </div>
  </div>

  <div className='text-center shadow-md px-10 rounded-xl'>
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center">
        <Image src={sp} width={250} height={250} />
      </div>
      <h3 className='text-lg font-medium pt-4 pb-2'>Latest Insider Trades and Activity</h3>
      <ul className="list-disc list-inside mt-2 space-y-4 text-center">
        <li className="text-left">
          Designed a dynamic full-stack website that visualizes data on insider trades, and provides users with real-time information on these trades.
        </li>
        <li className="text-left">
          Leveraged Flask for the backend, ReactJS, and Tailwind CSS for the front end.
        </li>
        <li className="text-left">
          Used the Yahoo Finance API to ensure accurate and up-to-date information on trading activities.
        </li>
      </ul>
    </div>
  </div>
</div>


        </section>  
        </section>    
      </main>
    </div>
  );
}
