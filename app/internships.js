import Image from 'next/image';
import nasa from '../public/nasa.png';
import argo from '../public/argo.png';

export default function Internships() {
  return (
    <section id='internships' className='p-10'>
      <div className='text-center p-10'>
        <h3 className='text-3xl py-1'>Internships</h3>
        <p className='text-md py-5 leading-5 text-gray-600'>
          My previous internships have focused on <span className='text-blue-500'>full stack development</span> and <span className='text-blue-500'>machine learning</span>.
        </p>
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 my-10'>
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
              <Image src={nasa} width={250} height={250} />
            </div>
            <h3 className='text-lg font-medium pt-4 pb-2'>NASA and CACI SWE intern</h3>
            <ul className="list-disc list-inside mt-2 space-y-4 text-center">
              <li className="text-left">
                Worked as a contractor with CACI at Johnson Space Center supporting the Lunar Gateway project, a space station that will orbit the moon.
              </li>
              <li className="text-left">
              Developed a comprehensive web interface for 2500+ users to manage data models utilized onboard NASA's Lunar Gateway space station using the .NET and Entity Framework Core.</li>
              <li className="text-left">
              Leveraged AWS S3 and Microsoft SQL Server for data storage and AWS SNS for cloud notifications, utilized Docker for containerization to ensure seamless deployment and scalability, and GitLab for version control.
              </li>
              <li className="text-left">
              Implemented a robust backend pipeline using repository, service, controller, and view to structure the web interface, adhering to best practices in inheritance and interface design. </li>
              </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
