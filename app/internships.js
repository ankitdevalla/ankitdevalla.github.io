import Image from 'next/image';
import nasa from '../public/nasa.png';
import argo from '../public/argo.png';

export default function Internships() {
  return (
    <section id='internships' className='p-10'>
      <div className='text-center p-10'>
        <h3 className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform'>
          Internships
        </h3>
        <p className='text-lg py-5 leading-7 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
          My previous internships have focused on <span className='text-blue-500 font-semibold'>full stack development</span> and <span className='text-purple-500 font-semibold'>machine learning</span>.
        </p>
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 my-10 space-y-10 lg:space-y-0'>
        <div className='text-center shadow-lg p-10 rounded-xl hover:scale-105 transition-transform duration-300 bg-white/30 dark:bg-black/30 backdrop-blur-sm'>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center p-4 hover:rotate-3 transition-transform">
              <Image src={argo} width={250} height={250} className="rounded-lg" />
            </div>
            <h3 className='text-xl font-bold pt-4 pb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
              Argo Data Resource Corporation
            </h3>
            <p className='text-gray-600 dark:text-gray-400 font-medium mb-4'>Software Engineering Intern</p>
            <ul className="list-disc list-inside mt-2 space-y-4 text-left text-gray-600 dark:text-gray-400">
              <li>
                Developed a modern ASP.NET MVC web application for hundreds of client banks utilizing C#, JavaScript, and HTML that monitored thousands of server requests from a database.
              </li>
              <li>
                Enhanced the UI/UX of users using a variety of technologies, such as JavaScript, HTML, and CSS, while working in an agile development environment.
              </li>
              <li>
                Utilized C# and SQL to write programs in order to interact with large databases of workstation performance metrics to increase productivity and mitigate the risk of failure throughout 100+ banks across the country.
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl hover:scale-105 transition-transform duration-300 bg-white/30 dark:bg-black/30 backdrop-blur-sm'>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center p-4 hover:rotate-3 transition-transform">
              <Image src={nasa} width={250} height={250} className="rounded-lg" />
            </div>
            <h3 className='text-xl font-bold pt-4 pb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
              NASA and CACI
            </h3>
            <p className='text-gray-600 dark:text-gray-400 font-medium mb-4'>Software Engineering Intern</p>
            <ul className="list-disc list-inside mt-2 space-y-4 text-left text-gray-600 dark:text-gray-400">
              <li>
                Worked as a contractor with CACI at Johnson Space Center supporting the Lunar Gateway project, a space station that will orbit the moon.
              </li>
              <li>
                Developed a comprehensive web interface for 2500+ users to manage data models utilized onboard NASA's Lunar Gateway space station using the .NET and Entity Framework Core.
              </li>
              <li>
                Leveraged AWS S3 and Microsoft SQL Server for data storage and AWS SNS for cloud notifications, utilized Docker for containerization to ensure seamless deployment and scalability, and GitLab for version control.
              </li>
              <li>
                Implemented a robust backend pipeline using repository, service, controller, and view to structure the web interface, adhering to best practices in inheritance and interface design.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
