import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center py-4 ">
      <Head>
        <title>M Yasir Mughal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="text-left sm:w-11/12 md:w-10/12 lg:w-5/12">
        <div className="grid sm:grid-cols-4 lg:grid-cols-5">
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="text-4xl font-light">M Yasir Mughal</h1>
            <h2 className="py-2 text-lg font-light text-gray-500">
              Graduate Research Associate
            </h2>
            <div className="leading-sm inline-flex items-center rounded-full border bg-sky-200 px-3 py-1 text-xs uppercase text-sky-700">
              AWS Cloud Solution Architect
            </div>
            <div className="leading-sm inline-flex items-center rounded-full border bg-green-200 px-3 py-1 text-xs  uppercase text-green-700">
              Cisco Certified Network Associate
            </div>
            <div className="leading-sm inline-flex items-center rounded-full border bg-violet-200 px-3 py-1 text-xs uppercase text-violet-700">
              Full Stack Developer
            </div>
            <p className="py-2 text-justify font-light text-gray-600">
              I am currently a BS Software Engineering Student at{' '}
              <a href="https://www.vu.edu.pk/" className="text-sky-700">
                {' '}
                Virtual University of Pakistan
              </a>
             . As a Full Stack Developer, I have expertise in a wide array of technologies including HTML, CSS (with frameworks like Bootstrap and Tailwind CSS), JavaScript (specializing in ReactJS, NextJS, and NodeJS), PHP, and ASP.Net with C#. I am also proficient in C/C++, Python, and cloud architecture as an AWS Solutions Architect. Additionally, I hold a CCNA qualification, demonstrating a strong foundation in networking. My diverse technical skill set enables me to handle both front-end and back-end development, offering scalable and efficient solutions.
            </p>

            <div className="container flex justify-between py-4">

              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/github.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/myasirmughal"
                  >
                    @myasirmughal
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://twitter.com/"
                  >
                    @myasirmughal                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/linkedin.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://www.linkedin.com/in/m-yasir-mughal/"
                  >
                    @myasirmughal
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="#"
                  >
                    CV.pdf
                  </a>
                </span>
              </div>
            </div>
            <hr />
          </div>

          {/* Education Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Education</h1>
          </div>

          {/* BS Software Engineering */}
          
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base">BS (Software Engineering)</h3>
            <h4 className="text-base font-light">
              Virtual University of Pakistan{' '}
            </h4>
            <p className="text-sm font-light">
              <span className="text-gray-400"> Projected CGPA:</span> 3.4 / 4.0
            </p>

            <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
              <p className="py-4 text-xs font-light">Oct. 2023 - Present</p>
            </div>
          </div>

          {/* B.COM */}
          
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base ">B.Com (Accounting & Finance)</h3>
            <h4 className="text-base font-light">
              Karachi University, Pakistan{' '}
            </h4>
            <p className="text-sm font-light">
              <span className="text-gray-400">Division:</span> 2nd Division
            </p>

   <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Aug. 2015 - May 2017</p>
          </div>         
          </div>

          {/* I.COM */}
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base ">I.Com (Accounting & Finance)</h3>
            <h4 className="text-base font-light">
            Hope Intermediate College, Pakistan{' '}
            </h4>
<div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Sep. 2011 - July 2015</p>
            
          </div>

          {/* Experience Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Experience</h1>
          </div>
 

          {/* End */}
        </div>
      </main>
    </div>
  )
}

export default Home
