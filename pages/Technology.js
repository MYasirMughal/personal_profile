// components/Technologies.js
import Image from 'next/image'

const Technologies = () => {
  return (
    <div className="p-6 space-y-8">
      <section>
        <h2 className="text-2xl font-semibold">👨‍💻 Programming languages</h2>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Programming-Languages/c.svg" alt="C language" height={50} width={50} />
          <Image src="/Programming-Languages/c++.svg" alt="C++ language" height={50} width={50} />
          <Image src="/Programming-Languages/python.svg" alt="python" height={50} width={50} />
          <Image src="/Programming-Languages/java.svg" alt="java" height={50} width={50} />
          <Image src="/Programming-Languages/c#.svg" alt="C#" height={50} width={50} />
          <Image src="/Programming-Languages/bash.svg" alt="Bash" height={50} width={50} />
          <Image src="/Programming-Languages/Batch.png" alt="Batch" height={50} width={50} />
          <Image src="/Programming-Languages/PowerShell.png" alt="PowerShell" height={50} width={50} />
          <Image src="/Programming-Languages/Solidity.png" alt="Solidity" height={50} width={50} />
          <Image src="/Programming-Languages/rust.svg" alt="Rust" height={50} width={50} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">🌎 Web-Development</h2>
        <h3 className="text-xl">Front-End</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Others/html.svg" alt="HTML" height={50} width={50} />
          <Image src="/Others/css.svg" alt="CSS" height={50} width={50} />
          <Image src="/Programming-Languages/javascript.svg" alt="JS" height={50} width={50} />
          <Image src="/Programming-Languages/typescript.svg" alt="TypeScript" height={50} width={50} />
        </div>

        <h3 className="text-xl mt-4">CSS Libraries</h3>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Frameworks/FrontEnd-Frameworks/Bootstrap.png" alt="BootstrapCSS" height={50} width={50} />
          <Image src="/Frameworks/FrontEnd-Frameworks/TailwindCSS.png" alt="TailwindCSS" height={50} width={50} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Back-End</h2>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Programming-Languages/php.png" alt="php" height={50} width={50} />
          <Image src="/Programming-Languages/javascript.svg" alt="JS" height={50} width={50} />
          <Image src="/Frameworks/BackEnd-Frameworks/NodeJS.svg" alt="NodeJS" height={50} width={50} />
          <Image src="/Frameworks/BackEnd-Frameworks/ASP.Net Web Application Development.png" alt="ASP.Net Web Development" height={50} width={50} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Databases</h2>
        <div className="flex flex-wrap space-x-4 space-y-2">
          <Image src="/Databases/mysql.svg" alt="MySQL" height={50} width={50} />
          <Image src="/Databases/oracle.svg" alt="Oracle" height={50} width={50} />
          <Image src="/Databases/postgresql.svg" alt="PostgreSQL" height={50} width={50} />
        </div>
      </section>
    </div>
  );
};

export default Technologies;