import { Hero, Button, InlineLink } from '@algolia/ui-library';
import { useColorMode } from '@docusaurus/theme-common';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import React from 'react';



import DocSearchLogo from './DocSearchLogo';
import showcaseProjects from './showcase-projects.json';


import pdf from "./OpenDataPortal-Poster.pdf";

function Home() {
  const { withBaseUrl } = useBaseUrlUtils();
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    if (colorMode === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [colorMode]);

  function Header() {
    return (
      <Hero
        id="hero"
        title={
          <>
           <div className="flex justify-center items-center mt-[-30px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-700 whitespace-nowrap">
            Open Data Portal
          </h1>
        </div>
            
            <span className="hero-title text-3xl leading-9 font-extrabold md:text-3xl lg:text-3xl md:leading-10 max-w-xxs inline-block">
              Data Analysis System
            </span>
          </>
        }
        background="curves"
        cta={[
          <Button key="get-started" href={withBaseUrl('docs/what-is-docsearch')}>
            Docs
          </Button>
        ]}
      />
    );
  }

  function Description() {
    return (
      <>
      <div className="h-[62vh] flex items-start py-0 overflow-hidden">
  <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl w-full">
    
    {/* Description */}
    <div className="pb-4 overflow-hidden">
      <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="relative">
          <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
          Database to support the Open Data Portal.
          </h3>
          <p className="mt-2 max-w-3xl mx-auto text-center text-xl leading-7 text-description">
          Open Data Portal with Quality Control in Port Management Information Systems
          </p>
        </div>
      </div>
    </div>

    <div className="pt-6 pb-12">
  <ul className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12 md:grid-cols-2">
    <li className="hidden lg:block">
      <div className="flex justify-center">
        <div
          className="max-w-xs w-full bg-indigo-700 border-2 border-indigo-800 dark:border-white shadow-lg rounded-lg p-6 text-center flex flex-col justify-center items-center h-full hover:border-indigo-900 hover:bg-indigo-800 hover:text-white cursor-pointer transition-colors duration-300"
          onClick={() => {
            document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <h4 className="text-2xl leading-8 font-medium text-white mt-4">Context</h4>
        </div>
      </div>
    </li>

    <li className="hidden lg:block">
      <div className="flex justify-center">
        <div
          className="max-w-xs w-full bg-indigo-700 border-2 border-indigo-800 dark:border-white shadow-lg rounded-lg p-6 text-center flex flex-col justify-center items-center h-full hover:border-indigo-900 hover:bg-indigo-800 hover:text-white cursor-pointer transition-colors duration-300"
          onClick={() => {
            document.getElementById('timeline-doc').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <h4 className="text-2xl leading-8 font-medium text-white mt-4">Timeline</h4>
        </div>
      </div>
    </li>

    <li className="hidden lg:block">
      <div className="flex justify-center">
        <div
          className="max-w-xs w-full bg-indigo-700 border-2 border-indigo-800 dark:border-white shadow-lg rounded-lg p-6 text-center flex flex-col justify-center items-center h-full hover:border-indigo-900 hover:bg-indigo-800 hover:text-white cursor-pointer transition-colors duration-300"
          onClick={() => {
            document.getElementById('presentations-doc').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <h4 className="text-2xl leading-8 font-medium text-white mt-4">Presentations</h4>
        </div>
      </div>
    </li>

    <li className="hidden lg:block">
      <div className="flex justify-center">
        <div
          className="max-w-xs w-full bg-indigo-700 border-2 border-indigo-800 dark:border-white shadow-lg rounded-lg p-6 text-center flex flex-col justify-center items-center h-full hover:border-indigo-900 hover:bg-indigo-800 hover:text-white cursor-pointer transition-colors duration-300"
          onClick={() => {
            document.getElementById('integrantes-doc').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <h4 className="text-2xl leading-8 font-medium text-white mt-4">Members</h4>
        </div>
      </div>
    </li>
  </ul>
</div>


    {/* Scroll Down Button */}
    <div className="flex justify-center mt-6">
      <a
        href="#"
        className="text-2xl text-blue-500 hover:text-blue-700 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7"></path>
        </svg>
      </a>
    </div>
  </div>
</div>

        {/* How it works */}
        <div id="how-it-works" className="diagonal-box py-16 bg-gray-200 overflow-hidden">
          <div className="diagonal-content max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="max-w-screen-xl mx-auto pt-6 px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900 md:text-4xl md:leading-10">
                  Context
                </h2>
                <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                Our project aims to create a portal where organizations related to maritime port management can publish relevant data, enabling researchers, stakeholders, and decision-makers to access and visualize it from different perspectives
                </p>
              </div>
            </div>

            <div className="py-16">
  <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-3 lg:gap-16">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <img
            className="h-40"
            src={withBaseUrl('img/assets/basededados.png')} // Nova imagem sobre base de dados
            width="190px"
            height="220px"
            alt="Database structure"
          />
        </div>
        <h5 className="text-xl font-semibold text-gray-900">1. Structured Database with Metadata</h5>
        <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-lg mx-auto">
          Create a well-structured database where each data point includes metadata indicating whether it was generated manually, by a script, or through a machine learning algorithm.
        </p>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <img
            className="h-40"
            src={withBaseUrl('img/assets/frontend.png')} // Nova imagem sobre frontend
            width="140px"
            height="220px"
            alt="Frontend development"
          />
        </div>
        <h5 className="text-xl font-semibold text-gray-900">2. Data Portal Development</h5>
        <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-lg mx-auto">
          Develop a website/portal for easy data access, allowing users to download data and metadata, view document analysis through charts and tables (dashboard), and track data provenance (manual entry or ML-generated).
        </p>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <img
            className="h-40"
            src={withBaseUrl('img/assets/error_fix.png')} // Nova imagem sobre correção de erros
            width="220px"
            height="220px"
            alt="Error detection and correction"
          />
        </div>
        <h5 className="text-xl font-semibold text-gray-900">3. Outlier Detection Mechanism</h5>
        <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-lg mx-auto">
        Develop a robust mechanism to detect and manage data inconsistencies, such as outliers, ensuring higher data accuracy, reliability, and meaningful analysis.
        </p>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>

        {/* Timeline Section */}
<div id="timeline-doc" className="py-24 overflow-hidden lg:py-32 lg:pb-40 ">
  <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
    <div className="relative">
      <h4 className="text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10 text-center mb-24">
        Project Timeline Overview
      </h4>

      <div className="relative">
        {/* Timeline Container */}
        <div className="flex flex-col gap-36">
          {/* Initial to M1 Section */}
          <div className="relative">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white border-2 border-black shadow-lg relative z-10">
                  <span className="font-bold text-lg">Initial</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-algolia text-white border-2 border-black shadow-lg relative z-10">
                  <span className="font-bold text-xl">M1</span>
                </div>
              </div>
            </div>

            <div className="absolute top-8 left-16 right-16 h-2 bg-gradient-to-r from-green-500 to-algolia border-2 border-black -translate-y-1/2">
              <div className="relative h-full">
                <div className="absolute -top-4 left-1/4 group">
                  <div className="h-8 w-8 rounded-full bg-green-100 cursor-pointer group-hover:bg-green-200 transition-colors duration-300 border-2 border-black" />
                  <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
                    <h6 className="font-semibold text-gray-900">Technologies</h6>
                    <p className="text-sm text-gray-600 mt-2">Tools and languages selected for the project.</p>
                  </div>
                </div>
                <div className="absolute -top-4 left-1/2 group">
                  <div className="h-8 w-8 rounded-full bg-green-100 cursor-pointer group-hover:bg-green-200 transition-colors duration-300 border-2 border-black" />
                  <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
                    <h6 className="font-semibold text-gray-900">Use Cases</h6>
                    <p className="text-sm text-gray-600 mt-2">Main features and how users interact with the system.</p>
                  </div>
                </div>
                <div className="absolute -top-4 left-3/4 group">
                  <div className="h-8 w-8 rounded-full bg-green-100 cursor-pointer group-hover:bg-green-200 transition-colors duration-300 border-2 border-black" />
                  <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
                    <h6 className="font-semibold text-gray-900">Architecture</h6>
                    <p className="text-sm text-gray-600 mt-2">Technical structure and organization of system components.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* M1 to M2 */}
          <div className="relative">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-algolia text-white border-2 border-black shadow-lg relative z-10">
                  <span className="font-bold text-xl">M1</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white border-2 border-black shadow-lg relative z-10">
                  <span className="font-bold text-xl">M2</span>
                </div>
              </div>
            </div>

            <div className="absolute top-8 left-16 right-16 h-2 bg-gradient-to-r from-algolia to-blue-500 border-2 border-black -translate-y-1/2">
              <div className="relative h-full">
                <div className="absolute -top-4 left-1/4 group">
                  <div className="h-8 w-8 rounded-full bg-blue-100 cursor-pointer group-hover:bg-blue-200 transition-colors duration-300 border-2 border-black" />
                  <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
                    <h6 className="font-semibold text-gray-900">Explore the Original Database</h6>
                    <p className="text-sm text-gray-600 mt-2">Analyze the existing data structure, content, and relationships.</p>
                  </div>
                </div>
                <div className="absolute -top-4 left-1/2 group">
                  <div className="h-8 w-8 rounded-full bg-blue-100 cursor-pointer group-hover:bg-blue-200 transition-colors duration-300 border-2 border-black" />
                  <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
                    <h6 className="font-semibold text-gray-900">Creation of the Database with Metadata</h6>
                    <p className="text-sm text-gray-600 mt-2">Design a new database including descriptive information (metadata) for better organization and understanding.</p>
                  </div>
                </div>
                <div className="absolute -top-4 left-3/4 group">
                  <div className="h-8 w-8 rounded-full bg-blue-100 cursor-pointer group-hover:bg-blue-200 transition-colors duration-300 border-2 border-black" />
                  <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
                    <h6 className="font-semibold text-gray-900">Implementation of the API</h6>
                    <p className="text-sm text-gray-600 mt-2">Develop an interface to allow external systems to access and interact with the database.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* M2 to M3 */}
          <div className="relative">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white border-2 border-black shadow-lg relative z-10">
                  <span className="font-bold text-xl">M2</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white border-2 border-black shadow-lg relative z-10">
                  <span className="font-bold text-xl">M3</span>
                </div>
              </div>
            </div>

            <div className="absolute top-8 left-16 right-16 h-2 bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-black -translate-y-1/2">
              <div className="relative h-full">
                <div className="absolute -top-4 left-1/4 group">
                  <div className="h-8 w-8 rounded-full bg-purple-100 cursor-pointer group-hover:bg-purple-200 transition-colors duration-300 border-2 border-black" />
                  <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
                    <h6 className="font-semibold text-gray-900">Data Prediction and Outlier Detection</h6>
                    <p className="text-sm text-gray-600 mt-2">Apply models to forecast values and identify anomalies in the data.</p>
                  </div>
                </div>
                <div className="absolute -top-4 left-1/2 group">
                  <div className="h-8 w-8 rounded-full bg-purple-100 cursor-pointer group-hover:bg-purple-200 transition-colors duration-300 border-2 border-black" />
                  <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
                    <h6 className="font-semibold text-gray-900">Prototype</h6>
                    <p className="text-sm text-gray-600 mt-2">Initial working version of the system to demonstrate key features.</p>
                  </div>
                </div>
                <div className="absolute -top-4 left-3/4 group">
                  <div className="h-8 w-8 rounded-full bg-purple-100 cursor-pointer group-hover:bg-purple-200 transition-colors duration-300 border-2 border-black" />
                  <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
                    <h6 className="font-semibold text-gray-900">Analysis Module</h6>
                    <p className="text-sm text-gray-600 mt-2">Component responsible for processing and extracting insights from data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* M3 to M4 */}
<div className="relative">
  <div className="flex justify-between items-center">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white border-2 border-black shadow-lg relative z-10">
        <span className="font-bold text-xl">M3</span>
      </div>
    </div>
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-500 text-white border-2 border-black shadow-lg relative z-10">
        <span className="font-bold text-xl">M4</span>
      </div>
    </div>
  </div>

  <div className="absolute top-8 left-16 right-16 h-2 bg-gradient-to-r from-purple-500 to-teal-500 border-2 border-black -translate-y-1/2">
    <div className="relative h-full">
      <div className="absolute -top-4 left-1/4 group">
        <div className="h-8 w-8 rounded-full bg-teal-100 cursor-pointer group-hover:bg-teal-200 transition-colors duration-300 border-2 border-black" />
        <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
          <h6 className="font-semibold text-gray-900">Final Testing</h6>
          <p className="text-sm text-gray-600 mt-2">Perform final testing and user acceptance.</p>
        </div>
      </div>

      <div className="absolute -top-4 left-1/2 group">
        <div className="h-8 w-8 rounded-full bg-teal-100 cursor-pointer group-hover:bg-teal-200 transition-colors duration-300 border-2 border-black" />
        <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
          <h6 className="font-semibold text-gray-900">Deployment</h6>
          <p className="text-sm text-gray-600 mt-2">Deploy the final product to production environment.</p>
        </div>
      </div>

      <div className="absolute -top-4 left-3/4 group">
        <div className="h-8 w-8 rounded-full bg-teal-100 cursor-pointer group-hover:bg-teal-200 transition-colors duration-300 border-2 border-black" />
        <div className="invisible group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-6 bg-gray-50 shadow-xl rounded-xl z-20">
          <h6 className="font-semibold text-gray-900">Project Handover</h6>
          <p className="text-sm text-gray-600 mt-2">Complete the project handover and provide support documentation.</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
</div>




         {/* Powered by Algolia */}
<div id="presentations-doc" className="py-16 bg-algolia overflow-hidden lg:py-24">
  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

    {/* Presentations Section - Full Width */}
    <div className="mb-16">
      <h4 className="text-2xl font-bold text-white text-center mb-8">Presentations</h4>
      
      {/* Horizontal Scrollable Container */}
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {/* Card - Reutilizável */}
        {[
          {
            title: 'Inception',
            img: '/img/assets/ppt1.svg',
            link: 'https://docs.google.com/presentation/d/1OEVRoA3UoXnU9jKVH4YhqLYetsXLSN3z/edit#slide=id.p4'
          },
          {
            title: 'M2',
            img: '/img/assets/m1.jpg',
            link: 'https://docs.google.com/presentation/d/1awYzIPstRRAQdGp66fkFIResul4E_RHZ/edit?usp=sharing'
          },
          {
            title: 'Checkpoint 1',
            img: '/img/assets/demo.png',
            link: 'https://docs.google.com/presentation/d/1RaEDWtTOHlEzXXlgNzZcp4z70XoSlhSq/edit?usp=sharing&ouid=102353031943616774716&rtpof=true&sd=true'
          },
          {
            title: 'M3',
            img: '/img/assets/m2.jpeg',
            link: 'https://docs.google.com/presentation/d/1awYzIPstRRAQdGp66fkFIResul4E_RHZ/edit?usp=sharing'
          },
          {
            title: 'Checkpoint 2',
            img: '/img/assets/demo.png',
            link: 'https://docs.google.com/presentation/d/1Q9uVIw36456xA8PJhLj6cmBvWraSCnRR/edit?usp=sharing&ouid=100667939769516213354&rtpof=true&sd=true'
          },
          {
            title: 'Checkpoint 3',
            img: '/img/assets/demo.png',
            link: 'https://docs.google.com/presentation/d/1RaEDWtTOHlEzXXlgNzZcp4z70XoSlhSq/edit?usp=sharing&ouid=100667939769516213354&rtpof=true&sd=true'
          },
          {
            title: 'Demo',
            img: '/img/assets/demo.png',
            link: 'https://docs.google.com/presentation/d/1gp6PMO3Ekd1Zabi7Wo7y_mfcQvAql6Lh/edit?usp=sharing&ouid=100667939769516213354&rtpof=true&sd=true'
          },
          {
            title: 'M4',
            img: '/img/assets/m3.jpg',
            link: 'https://drive.google.com/file/d/1pKTCY0cxekEJjhVflz6okwmB8aJouAbB/view?usp=sharing'
          }
        ].map(({ title, img, link }) => (
          <div key={title} className="relative group rounded-lg shadow-xl overflow-hidden cursor-pointer h-56 w-full max-w-md flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${img}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent transition-opacity"></div>
            <div className="relative p-4 flex flex-col items-center justify-center text-center text-white transition-opacity group-hover:opacity-100 opacity-80 h-full">
              <h5 className="text-sm font-semibold text-shadow-md mb-3">{title}</h5>
              <a
                href={link}
                download
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l4 4 4-4m-4-12v12" />
                  </svg>
                  Download
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Video and Poster Section - Side by Side */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      
      {/* Video Section - Takes 2 columns for wider display */}
      <div className="lg:col-span-2">
        <h4 className="text-2xl font-bold text-white text-center mb-8">Video Promotional</h4>
        <div className="w-full">
          <div className="relative w-full" style={{ paddingBottom: '63.5%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/krPzibcLUZg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Poster Section - Takes 1 column */}
      <div className="lg:col-span-1">
        <h4 className="text-2xl font-bold text-white text-center mb-8">Project Poster</h4>
        <div className="w-full">
          <div className="relative group rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl bg-white">
            {/* Preview using image.png with fallback methods */}
            <img
              className="w-full h-[500px] object-cover"
              src={withBaseUrl('/img/assets/image99.png')}
              alt="Project Poster"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = withBaseUrl('/img/assets/poster-fallback.png'); // Fallback image
              }}
            />

            {/* Fallback div if image fails to load */}
            <div
              className="w-full h-[500px] bg-gray-200 hidden items-center justify-center text-gray-600 text-lg font-semibold"
            >
              Poster Preview
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h5 className="text-xl font-semibold text-shadow-md mb-4">Open Data Portal</h5>
              <a
  href={pdf}
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:from-green-700 hover:to-emerald-700 transform transition-all duration-300 ease-in-out hover:scale-105"
  download="OpenDataPortal-Poster.pdf"
>
  <span className="flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    Download PDF
  </span>
</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


        {/* Accessibility */}

<div id="integrantes-doc" className="py-16 lg:py-24">
  <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
    <div className="text-center">
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
        Members
      </h3>
      <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-description lg:mx-auto">
        Meet the team behind this project. We're a group of 5 students and 2 professors, working together to make it happen.
      </p>
    </div>

    {/* Cards de Integrantes */}
    <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* Card de Integrante 1 - Bruno */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img
            className="h-32 w-32 rounded-full object-cover border-4 border-blue-500"
            src={withBaseUrl('/img/assets/bruno.jpg')}
            alt="Bruno Tavares"
          />
        </div>
        <div className="text-center"> {/* Centraliza o conteúdo */}
          <h4 className="text-xl font-semibold text-gray-900">Bruno Tavares</h4>
          <p className="mt-2 text-base text-gray-600">DevOps</p>
        </div>
      </div>

      {/* Card de Integrante 2 - Diogo */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img
            className="h-32 w-32 rounded-full object-cover border-4 border-blue-500"
            src={withBaseUrl('/img/assets/diogo.jpg')}
            alt="Diogo Costa"
          />
        </div>
        <div className="text-center"> {/* Centraliza o conteúdo */}
          <h4 className="text-xl font-semibold text-gray-900">Diogo Costa</h4>
          <p className="mt-2 text-base text-gray-600">Product Owner</p> 
        </div>
      </div>

      {/* Card de Integrante 3 - André */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img
            className="h-32 w-32 rounded-full object-cover border-4 border-blue-500"
            src={withBaseUrl('/img/assets/andre.jpg')}
            alt="André Alves"
          />
        </div>
        <div className="text-center"> {/* Centraliza o conteúdo */}
          <h4 className="text-xl font-semibold text-gray-900">André Alves</h4>
          <p className="mt-2 text-base text-gray-600">Architect</p>
        </div>
      </div>

      {/* Card de Integrante 4 - Chicão */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img
            className="h-32 w-32 rounded-full object-cover border-4 border-blue-500"
            src={withBaseUrl('/img/assets/chicao.jpg')}
            alt="Francisco Pinto"
          />
        </div>
        <div className="text-center"> {/* Centraliza o conteúdo */}
          <h4 className="text-xl font-semibold text-gray-900">Francisco Pinto</h4>
          <p className="mt-2 text-base text-gray-600">Team Manager</p>
        </div>
      </div>

      {/* Card de Integrante 5 - Rei */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img
            className="h-32 w-32 rounded-full object-cover border-4 border-blue-500"
            src={withBaseUrl('/img/assets/rei.JPG')}
            alt="Pedro Rei"
          />
        </div>
        <div className="text-center"> {/* Centraliza o conteúdo */}
          <h4 className="text-xl font-semibold text-gray-900">Pedro Rei</h4>
          <p className="mt-2 text-base text-gray-600">DB Master</p>
        </div>
      </div>

      {/* Card de Professor 1 - José Moreira */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img
            className="h-32 w-32 rounded-full object-cover border-4 border-blue-500"
            src="https://static.vecteezy.com/ti/vetor-gratis/p1/14554760-foto-negativa-do-perfil-do-homem-silhueta-anonima-cabeca-humana-empresario-trabalhador-apoio-ilustracaoial-vetor.jpg"
            alt="José Moreira"
          />
        </div>
        <div className="text-center"> {/* Centraliza o conteúdo */}
          <h4 className="text-xl font-semibold text-gray-900">José Moreira</h4>
          <p className="mt-2 text-base text-gray-600">Professor</p>
        </div>
      </div>

      {/* Card de Professor 2 - Paulo Pintor */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img
            className="h-32 w-32 rounded-full object-cover border-4 border-blue-500"
            src="https://static.vecteezy.com/ti/vetor-gratis/p1/14554760-foto-negativa-do-perfil-do-homem-silhueta-anonima-cabeca-humana-empresario-trabalhador-apoio-ilustracaoial-vetor.jpg"
            alt="Paulo Pintor"
          />
        </div>
        <div className="text-center"> {/* Centraliza o conteúdo */}
          <h4 className="text-xl font-semibold text-gray-900">Paulo Pintor</h4>
          <p className="mt-2 text-base text-gray-600">Professor</p>
        </div>
      </div>

    </div>
  </div>
</div>




      </>
    );
  }

  return (
    <div id="tailwind">
      <Header />
      <Description />
    </div>
  );
}

export default Home;
