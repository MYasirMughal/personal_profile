// components/Technologies.js
import Image from 'next/image'

const Technologies = () => {
  return (
    <div className="p-6 space-y-8">
      <section>
        <h2 className="text-2xl font-semibold">👨‍💻 Programming languages</h2>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/c.svg" alt="C language" height={50} width={50} />
          <Image src="/Logos/c++.svg" alt="C++ language" height={50} width={50} />
          <Image src="/Logos/python.svg" alt="Python" height={50} width={50} />
          <Image src="/Logos/bash.svg" alt="Bash" height={50} width={50} />
          <Image src="/Logos/Batch.png" alt="Batch" height={50} width={50} />
          <Image src="/Logos/PowerShell.png" alt="PowerShell" height={50} width={50} />
          <Image src="/Logos/Solidity.png" alt="Solidity" height={50} width={50} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">🌎 Web-Development</h2>
        <h3 className="text-xl">Front-End</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/html.svg" alt="HTML" height={50} width={50} />
          <Image src="/Logos/css.svg" alt="CSS" height={50} width={50} />
          <Image src="/Logos/javascript.svg" alt="JS" height={50} width={50} />
          <Image src="/Logos/typescript.svg" alt="TypeScript" height={50} width={50} />
        </div>

        <h3 className="text-xl mt-4">CSS Libraries</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/Bootstrap.png" alt="BootstrapCSS" height={50} width={50} />
          <Image src="/Logos/TailwindCSS.png" alt="TailwindCSS" height={50} width={50} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Back-End</h2>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/php.png" alt="php" height={50} width={50} />
          <Image src="/Logos/javascript.svg" alt="JS" height={50} width={50} />
          <Image src="/Logos/NodeJS.svg" alt="NodeJS" height={50} width={50} />
          
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Databases</h2>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Logos/mysql.svg" alt="MySQL" height={50} width={50} />
          <Image src="/Logos/oracle.svg" alt="Oracle" height={50} width={50} />
          <Image src="/Logos/postgresql.svg" alt="PostgreSQL" height={50} width={50} />
        </div>
      </section>
    </div>
  );
};

export default Technologies;