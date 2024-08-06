import Image from 'next/image';
import nba from '../public/nba.jpeg';
import sp from '../public/stox.jpeg';
import nil from '../public/NIL.png';
import logo2 from '../public/logo2.webp';

export default function Projects() {
  return (
    <section id='projects' className='p-10'>
      <div className='text-center p-10'>
        <h3 className='text-3xl py-1'>Projects</h3>
        <p className='text-md py-5 leading-5 text-gray-600'>
          My projects have focused on <span className='text-blue-500'>full stack development</span> and <span className='text-blue-500'>machine learning</span>. You can find these projects on my GitHub!
        </p>
      </div>
      <div className='lg:grid lg:grid-cols-4 lg:gap-10 my-10'>
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
              <Image src={logo2} width={250} height={250} />
            </div>
            <h3 className='text-lg font-medium pt-4 pb-2'>Smart Meal Planner</h3>
            <ul className="list-disc list-inside mt-2 space-y-4 text-center">
              <li className="text-left">
              Developed a full-stack application using Django and React that allows users to log in, input ingredients in their fridge, and receive recipes suggestions, and save these recipes to their profile              </li>
              <li className="text-left">
              Fine-tuned the Mistral 7B model using Low-Rank Adaptation (LoRA) in PyTorch using a recipe dataset in order to take in user input of ingredients and generate recipes to the user.
              </li>
              <li className="text-left">
              Implemented both Google OAuth and traditional login authentication methods for secure user access, leveraging Docker for containerization.
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center shadow-md px-10 rounded-xl'>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center">
              <Image src={nil} width={250} height={250} />
            </div>
            <h3 className='text-lg font-medium pt-4 pb-2'>NIL Platform</h3>
            <ul className="list-disc list-inside mt-2 space-y-4 text-center">
              <li className="text-left">
              This project that focuses on NIL deals, or Name, Image, and Likeness, is a platform that allows college athletes to monetize their image and likeness and connect with potential suitors.
              </li>
              <li className="text-left">
              Created a custom platform for athletes to be able to find NIL deals seamlessly that match their profile. Used ReactJS and Express.Js for the frontend and backend, as well as MongoDB for database.
              </li>
              <li className="text-left">
              Built out a custom collaborative filtering recommendation model based on deals users have explored in the past, using PyTorch and integrated this model into the application.
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
  );
}
