// /Badges.js
import Image from 'next/image'

const Badges = () => {
  return (
    <div className="p-6 space-y-8">

      <h1 className="pt-8 pb-4 text-3xl font-light">Achieved Digital Badges</h1>
        
      
        <div className="flex flex-wrap space-x-2 space-y-2">
         
          <div className="mr-[5px]">  
      <a href="https://www.credly.com/badges/cf1c9713-c8a1-422e-84cd-b81d3a363e05">
<Image src="/Badges/AWS-SAA.png" alt="AWS Solution Architect" height={140} width={140} /></a>
          </div>

<div className="mr-[5px]">
      <a href="https://www.credly.com/badges/a6a2d873-815a-493d-bc67-2ad6182d78fd">    
<Image src="/Badges/CCNA-ENSA.png" alt="CCNA ENSA" height={140} width={140} /></a>
</div>

<div className="mr-[5px]">
            <Image src="/Badges/CCNA-SRWE.png" alt="CCNA SRWE" height={140} width={140} />
</div>
<div className="mr-[5px]">
            <Image src="/Badges/CCNA-ITN.png" alt="CCNA ITN" height={140} width={140} />
          </div>
<div className="mr-[5px]">
            <Image src="/Badges/Network_Security.png" alt="Network Security" height={140} width={140} />
</div>

<div className="mr-[5px]">

            <Image src="/Badges/Networking-Essentials.png" alt="Networking Essentials" height={140} width={140} />
</div>

        <div className="mr-[5px]">           
          <Image src="/Badges/CyberOpsAssoc.png" alt="Cyber Ops Associate" height={140} width={140} />

        </div>
       <div className="mr-[5px]">  
          <Image src="/Badges/DEVASC.png" alt="DEV ASC" height={140} width={140} />

       </div>
            <div className="mr-[5px]">       
          <Image src="/Badges/CyberEssentials.png" alt="CyberSecurity Essentials" height={140} width={140} />
            </div>
     <div className="mr-[5px]">    
          <Image src="/Badges/Networking-Basics.png" alt="Networking Basics" height={140} width={140} />
     </div>
      <div className="mr-[5px]">   
          <Image src="/Badges/ISC2.png" alt="ISC2" height={140} width={140} />

      </div>    

     <div className="mr-[5px]">     
          <Image src="/Badges/ITCS.png" alt="ITCS" height={140} width={140} />
     </div>
         <div className="mr-[5px]">
          <Image src="/Badges/ITE.png" alt="ITE" height={140} width={140} />
         </div>

         <div className="mr-[5px]">          
          <Image src="/Badges/CHB.png" alt="Computer Hardware Basics" height={140} width={140} />
         </div>
      <div className="mr-[5px]">   
          <Image src="/Badges/OSB.png" alt="Operting System Basics" height={140} width={140} />
      </div>
        </div>








      
    </div>

      );
      };
      
      export default Badges;
