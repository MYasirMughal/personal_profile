// /Badges.js
import Image from 'next/image'

const Badges = () => {
  return (
    <div className="p-6 space-y-8">

      <h1 className="pt-8 pb-4 text-3xl font-light">Achieved Digital Badges</h1>
        
      
        <div className="flex flex-wrap space-x-4 space-y-2">
         
          <Image src="/Logos/c.svg" alt="C language" height={50} width={50} />

        </div>
    </div>

      );
      };
      
      export default Badges;
