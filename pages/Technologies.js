// components/Technologies.js
import Image from 'next/image'

const Technologies = () => {
  return (
    <div className="p-6 space-y-8">
      <section>


      <h1 className="pt-8 pb-4 text-3xl font-light">Programming Languages</h1>
        
      
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/c.svg" alt="C language" height={50} width={50} />
          <Image src="/Logos/c++.svg" alt="C++ language" height={50} width={50} />
          <Image src="/Logos/python.svg" alt="Python" height={50} width={50} />
          <Image src="/Logos/bash.svg" alt="Bash" height={50} width={50} />

        </div>
      </section>

      <section>

<h1 className="pt-8 pb-4 text-3xl font-light">Web Development</h1>
        
        <h3 className="text-xl">Front-End</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/html.svg" alt="HTML" height={50} width={50} />
          <Image src="/Logos/css.svg" alt="CSS" height={50} width={50} />
          <Image src="/Logos/javascript.svg" alt="JS" height={50} width={50} />
          <Image src="/Logos/typescript.svg" alt="TypeScript" height={50} width={50} />
        </div>

        <h3 className="text-xl mt-4">CSS Libraries</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/boostrap.svg" alt="BootstrapCSS" height={50} width={50} />
        </div>

        <h3 className="text-xl mt-4">Tailwind CSS Components Libraries</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/boostrap.svg" alt="Shadcn" height={50} width={50} />
        </div>
        
 <h3 className="text-xl mt-4">State Management Libraries</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/boostrap.svg" alt="Redux" height={50} width={50} />
        </div>
           <h3 className="text-xl mt-4">Data Fetching Libraries</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/boostrap.svg" alt="Axios" height={50} width={50} />
        </div>
 <h3 className="text-xl mt-4">Headless CMS Libraries</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/boostrap.svg" alt="Sanity.io" height={50} width={50} />
        </div>
           <h3 className="text-xl mt-4">Form Handling Libraries</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/boostrap.svg" alt="Formspree" height={50} width={50} />
        </div>
          <h3 className="text-xl mt-4">UI Components Libraries</h3>
          <div className="flex flex-wrap space-x-4 space-y-2">
            <Image src="/Logos/boostrap.svg" alt="TypeWriter" height={50} width={50} />
          </div>
 <h3 className="text-xl mt-4">Motion Libraries</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/boostrap.svg" alt="Framer Motion" height={50} width={50} />

          
        </div>
      </section>

      <section>

        <h1 className="pt-8 pb-4 text-3xl font-light">Back-End</h1>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/php.png" alt="php" height={50} width={50} />
          <Image src="/Logos/javascript.svg" alt="JS" height={50} width={50} />
          <Image src="/Logos/nodejs.svg" alt="NodeJS" height={50} width={50} />
          
        </div>
      </section>

      <section>
       <h1 className="pt-8 pb-4 text-3xl font-light">Database</h1>       
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/mysql.svg" alt="MySQL" height={50} width={50} />
          
        </div>
      </section>
    </div>
  );
};

export default Technologies;