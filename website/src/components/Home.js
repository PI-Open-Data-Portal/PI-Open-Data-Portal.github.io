import { Hero, Button, InlineLink } from '@algolia/ui-library';
import { useColorMode } from '@docusaurus/theme-common';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import React from 'react';



import DocSearchLogo from './DocSearchLogo';
import showcaseProjects from './showcase-projects.json';



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
            Nexus - Porto de Sines
          </h1>
        </div>
            
            <span className="hero-title text-3xl leading-9 font-extrabold md:text-3xl lg:text-3xl md:leading-10 max-w-xxs inline-block">
              Open Data Portal
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
    <li>
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

    <li>
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

    <li>
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

    <li>
      <div className="flex justify-center">
        <div
          className="max-w-xs w-full bg-indigo-700 border-2 border-indigo-800 dark:border-white shadow-lg rounded-lg p-6 text-center flex flex-col justify-center items-center h-full hover:border-indigo-900 hover:bg-indigo-800 hover:text-white cursor-pointer transition-colors duration-300"
          onClick={() => {
            document.getElementById('integrantes-doc').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <h4 className="text-2xl leading-8 font-medium text-white mt-4">Integrantes</h4>
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
                  We scrape your documentation or technical blog, configure the Algolia application and send you the
                  snippet you'll have to integrate. It's that simple.
                </p>
              </div>
            </div>

            <div className="py-16">
              <div className="max-w-xl mx-auto px-4 md:px-6 lg:max-w-screen-lg lg:px-8 ">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                  <div>
                    <div className="flex items-center justify-center">
                      <img
                        className="h-200"
                        src={withBaseUrl('img/assets/scraping.svg')}
                        width="190px"
                        height="220px"
                        alt="Scraping with Algolia Crawler"
                      />
                    </div>
                    <div className="mt-10 lg:mt-0 p-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">1. Scraping</h5>
                      <p className="mt-2 text-base leading-6 text-gray-600">
                        We leverage the{' '}
                        <InlineLink
                          target="_blank"
                          href="https://www.algolia.com/products/search-and-discovery/crawler/"
                        >
                          Algolia Crawler
                        </InlineLink>{' '}
                        to index every section of your website.
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 p-4">
                    <div className="h-200 flex items-center justify-center">
                      <img
                        src={withBaseUrl('img/assets/configuration.svg')}
                        width="140px"
                        height="220px"
                        alt="Configuration of your crawler"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg leading-6 font-medium text-gray-900">2. Configuration</h5>
                      <p className="mt-2 text-base leading-6 text-gray-600">
                        You don't need to configure any settings or even have an Algolia account. We take care of this
                        for you!
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 p-4">
                    <div className="h-200 flex items-center justify-center">
                      <img
                        src={withBaseUrl('img/assets/implementation.svg')}
                        width="220px"
                        height="220px"
                        alt="Implementation on your website"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg leading-6 font-medium text-gray-900">3. Implementation</h5>
                      <p className="mt-2 text-base leading-6 text-gray-600">
                        We'll send you a small snippet to integrate DocSearch to your website and an invite to your
                        fully configured Algolia application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Anatomy of DocSearch */}
        <div id='timeline-doc' className="py-16 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-extrabold tracking-tight md:text-3xl md:leading-9">
                  Overview of DocSearch
                </h4>
                <p className="mt-3 text-lg leading-7 text-description">
                  Search doesn't have to be painful — when a user searches through your docs, they'll get a frictionless
                  modal dialog to work in. And it's a Free Service!
                </p>

                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-algolia text-white">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="sparkles w-6 h-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium">All featured search box</h5>
                        <p className="mt-2 text-base leading-6 text-description">
                          The conversation start here: you want to have the state-of-the-art search box to represent
                          your voice. DocSearch comes with our extensive experience in making this search box respects
                          all the best practices.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-algolia text-white">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="menu-alt2 w-6 h-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium">Hierarchical display</h5>
                        <p className="mt-2 text-base leading-6 text-description">
                          DocSearch organizes the search results into chunks that reflect how your documentation is
                          structured.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-10 -mx-4 lg:mt-0 uil-ta-center">
                <img
                  className="relative mx-auto rounded-lg shadow-lg image-rendering-crisp"
                  src={withBaseUrl(
                    `img/assets/${colorMode === 'dark' ? 'docsearch-shadow-dark' : 'docsearch-shadow'}.png`,
                  )}
                  alt="docsearch-modal"
                />
              </div>
            </div>

            <div className="relative mt-12 md:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <ul className="mt-10">
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-algolia text-white">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="lightning-bolt w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium">Inputs and shortcuts</h5>
                          <p className="mt-2 text-base leading-6 text-description">
                            It looks almost similar to a search input but it's a button. When you click/touch or use the
                            keyboard shortcut, it opens a modal dropdown and focuses the search input.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="mt-10">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-algolia text-white">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="arrows-expand w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium">Always sized and positioned correctly</h5>
                          <p className="mt-2 text-base leading-6 text-description">
                            The modal experience leverages behavior of most popular Integrated Developement
                            Environements (IDEs) or native experience on mobile. An opaque layer is making sure we keep
                            the context of the documentation but remove all visual pollution.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 -mx-4 lg:mt-0 lg:col-start-1 uil-ta-center">
                  <img
                    className="relative mx-auto"
                    width="490"
                    src={withBaseUrl('img/assets/anatomy.svg')}
                    alt="anatomy-of-docsearch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Powered by Algolia */}
         <div id="presentations-doc" className="py-16 bg-algolia overflow-hidden lg:py-24">
  <div className="text-center">
    <h3 className="mt-2 text-3xl leading-8 font-extrabold text-white tracking-tight md:text-4xl md:leading-10">
      Presentations
    </h3>
  </div>
  <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
      
      {/* PowerPoint Disponível - Card 1 */}
      <div className="relative group rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl">
        {/* Fundo com a imagem do PowerPoint */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform transform group-hover:scale-110"
          style={{
            backgroundImage: "url('/img/assets/ppt1.svg')",  // Imagem do seu PowerPoint
            height: '100%',
          }}
        ></div>

        {/* Camada de sobreposição para melhorar contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent transition-opacity"></div>

        {/* Conteúdo sobreposto */}
        <div className="relative p-6 flex flex-col items-center justify-center text-center text-white transition-opacity group-hover:opacity-100 opacity-80">
          <h5 className="text-2xl font-semibold text-shadow-md">Inception</h5>
          {/* Novo Layout para o botão */}
          <a
            href="https://drive.google.com/file/d/1Cp-nUeyLaDu-xGT2X-eBbS-lp36VTwKH/view?usp=sharing"
            download
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            <span className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l4 4 4-4m-4-12v12" />
              </svg>
              Download
            </span>
          </a>
        </div>
      </div>

      {/* Coming Soon 1 */}
      <div className="relative group rounded-lg shadow-2xl overflow-hidden cursor-not-allowed opacity-60 transition-all transform hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0 bg-gray-800"></div>
        <div className="relative p-6 flex flex-col items-center justify-center text-center text-white">
          <h5 className="text-2xl font-semibold">Presentation 2</h5>
          <p className="mt-2 text-sm font-light">Coming Soon</p>
        </div>
      </div>

      {/* Coming Soon 2 */}
      <div className="relative group rounded-lg shadow-2xl overflow-hidden cursor-not-allowed opacity-60 transition-all transform hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0 bg-gray-800"></div>
        <div className="relative p-6 flex flex-col items-center justify-center text-center text-white">
          <h5 className="text-2xl font-semibold">Presentation 3</h5>
          <p className="mt-2 text-sm font-light">Coming Soon</p>
        </div>
      </div>

      {/* Coming Soon 3 */}
      <div className="relative group rounded-lg shadow-2xl overflow-hidden cursor-not-allowed opacity-60 transition-all transform hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0 bg-gray-800"></div>
        <div className="relative p-6 flex flex-col items-center justify-center text-center text-white">
          <h5 className="text-2xl font-semibold">Presentation 4</h5>
          <p className="mt-2 text-sm font-light">Coming Soon</p>
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
        Integrantes
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
          <p className="mt-2 text-base text-gray-600">Aluno</p>
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
          <p className="mt-2 text-base text-gray-600">Aluno</p> 
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
          <p className="mt-2 text-base text-gray-600">Aluno</p>
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
          <p className="mt-2 text-base text-gray-600">Aluno</p>
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
          <p className="mt-2 text-base text-gray-600">Aluno</p>
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
