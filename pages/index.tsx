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
              <a href="https://www.edu.edu.pk/" className="text-sky-700">
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
                    href="https://www.linkedin.com/in/myasirmughal/"
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
                    href="/PDF/Tiankai_Xie_CV.pdf"
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

          {/* Ph.D. */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Aug. 2018 - Present</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base">Ph.D. in Computer Science</h3>
            <h4 className="text-base font-light">
              Arizona State University, Tempe, AZ{' '}
            </h4>
            <p className="text-sm font-light">
              <span className="text-gray-400">GPA:</span> 3.69 / 4.0
            </p>
            <p className="text-sm font-light">
              <span className="text-gray-400">Advisor:</span> Ross Maciejewski
            </p>
            <p className="text-sm font-light">
              <span className="text-gray-400">Dissertation:</span> Explaining
              Vulnerabilities in Machine Learning through Visual Analytics
            </p>
            <p className="text-sm font-light">
              <span className="text-gray-400">Committee:</span> Ross
              Maciejewski, Huan Liu, Chris Bryan, and Hanghang Tong
            </p>
          </div>

          {/* M.S. */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Aug. 2015 - May 2017</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base ">M.S. in Computer Science</h3>
            <h4 className="text-base font-light">
              Steven Institute of Technology, Hoboken, NJ{' '}
            </h4>
            <p className="text-sm font-light">
              <span className="text-gray-400">GPA:</span> 3.77 / 4.0
            </p>
          </div>

          {/* B.S. */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Sep. 2011 - July 2015</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base ">B.S. in Computer Science</h3>
            <h4 className="text-base font-light">
              Beijing Forestry University, Beijing, China{' '}
            </h4>
          </div>

          {/* Experience Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Experience</h1>
          </div>
 

          {/* Reference Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Reference</h1>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Ross Maciejewski,{' '}
              <span className="font-light">Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light italic text-gray-500">
              Arizona State University
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://rmaciejewski.faculty.asu.edu/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Huan Liu, <span className="font-light">Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light italic text-gray-500">
              Arizona State University
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://www.public.asu.edu/~huanliu/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Hanghang Tong,{' '}
              <span className="font-light">Associate Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              Department of Computer Science
            </p>
            <p className="font-light italic text-gray-500">
              University of Illinois at Urbana-Champaign
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://tonghanghang.org/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Chris Bryan,{' '}
              <span className="font-light">Assistant Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light italic text-gray-500">
              Arizona State University
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="https://chrisbryan.github.io/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Yuxin Ma,{' '}
              <span className="font-light">Assistant Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              Department of Computer Science and Engineering
            </p>
            <p className="font-light italic text-gray-500">
              Southern University of Science and Technology
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="https://mayuxin.me/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Jundong Li,{' '}
              <span className="font-light">Assistant Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              Department of Computer Science, and School of Data Science
            </p>
            <p className="font-light italic text-gray-500">
              University of Virginia
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://www.ece.virginia.edu/~jl6qk/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>
          {/* End */}
        </div>
      </main>
    </div>
  )
}

export default Home
