import Image from 'next/image';
import mm from '../public/mm.webp';
import vet from '../public/vet.jpg';
import logo2 from '../public/logo2.webp';

export default function Projects() {
  return (
    <section id='projects' className='p-10'>
      <div className='text-center p-10'>
        <h3 className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform'>
          Projects
        </h3>
        <p className='text-lg py-5 leading-7 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
          My projects have focused on <span className='text-blue-500 font-semibold'>full stack development</span> and <span className='text-purple-500 font-semibold'>machine learning</span>. You can find these projects on my GitHub!
        </p>
      </div>
      <div className='lg:grid lg:grid-cols-3 lg:gap-10 my-10 space-y-10 lg:space-y-0'>
        <div className='text-center shadow-lg p-10 rounded-xl hover:scale-105 transition-transform duration-300 bg-white/30 dark:bg-black/30 backdrop-blur-sm'>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center p-4 hover:rotate-3 transition-transform">
              <Image src={mm} width={300} height={250} className="rounded-lg" />
            </div>
            <a href="https://bracketbrain.streamlit.app" target="_blank" rel="noopener noreferrer">
              <h3 className='text-xl font-bold pt-4 pb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
                BracketBrain
              </h3>
            </a>
            <ul className="list-disc list-inside mt-2 space-y-4 text-left text-gray-600 dark:text-gray-400">
              <li>
                Developed a NCAA tournament (March Madness) prediction platform serving 1,800+ users, integrating live betting odds through The Odds API and deploying with Streamlit on Google Cloud Platform.
              </li>
              <li>
                Implemented machine learning algorithms including XGBoost and Random Forests to predict tournament outcomes with up to 76% accuracy, using a feature extraction pipeline processing 15+ metrics (KenPom, Torvik, NET) for 350+ teams to identify performance indicators.
              </li>
              <li>
              Created automated betting edge detection system comparing model predictions against market odds, calculating expected value and identifying statistically significant discrepancies.
              </li>
            </ul>
          </div>
        </div>

        <div className='text-center shadow-lg p-10 rounded-xl hover:scale-105 transition-transform duration-300 bg-white/30 dark:bg-black/30 backdrop-blur-sm'>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center p-4 hover:rotate-3 transition-transform">
              <Image src={logo2} width={250} height={250} className="rounded-lg" />
            </div>
            <h3 className='text-xl font-bold pt-4 pb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
              Smart Meal Planner
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-4 text-left text-gray-600 dark:text-gray-400">
              <li>
                Developed a full-stack application using Django and React that allows users to log in, input ingredients in their fridge, and receive recipes suggestions, and save these recipes to their profile
              </li>
              <li>
                Fine-tuned the Mistral 7B model using Low-Rank Adaptation (LoRA) in PyTorch using a recipe dataset in order to take in user input of ingredients and generate recipes to the user.
              </li>
              <li>
                Implemented both Google OAuth and traditional login authentication methods for secure user access, leveraging Docker for containerization.
              </li>
            </ul>
          </div>
        </div>

        <div className='text-center shadow-lg p-10 rounded-xl hover:scale-105 transition-transform duration-300 bg-white/30 dark:bg-black/30 backdrop-blur-sm'>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center p-4 hover:rotate-3 transition-transform">
              <Image src={vet} width={300} height={250} className="rounded-lg" />
            </div>
            <h3 className='text-xl font-bold pt-4 pb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
              VetAssist
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-4 text-left text-gray-600 dark:text-gray-400">
              <li>
                Built a dynamic website that helps centralize veterans' resources for jobs, facilities, and forms, while providing filtering tailored to the specific user.
              </li>
              <li>
                Developed a full-stack application using Flask, ReactJS, and PostgreSQL, allowing users to access a secure API and interact with dynamic data through a frontend hosted on AWS Amplify.
              </li>
              <li>
                Deployed the backend on AWS EC2 and utilized PostgreSQL to manage user data efficiently.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
