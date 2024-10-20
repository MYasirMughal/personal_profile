// /Badges.js
import Image from 'next/image'

const Badges = () => {
  return (
    <div className="p-6 space-y-8">

      <h1 className="pt-8 pb-4 text-3xl font-light">Achieved Digital Badges</h1>
        
      
        <div className="flex flex-wrap space-x-4 space-y-2">
         
          <Image src="/Badges/AWS-SAA.png" alt="AWS Solution Architect" height={150} width={150} />



            <Image src="/Badges/CCNA-ENSA.png" alt="CCNA ENSA" height={150} width={150} />



            <Image src="/Badges/CCNA-SRWE.png" alt="CCNA SRWE" height={150} width={150} />


            <Image src="/Badges/CCNA-ITN.png" alt="CCNA ITN" height={150} width={150} />



            <Image src="/Badges/Network_Security.png" alt="Network Security" height={150} width={150} />




            <Image src="/Badges/Networking-Essentials.png" alt="Networking Essentials" height={150} width={150} />


                   
          <Image src="/Badges/CyberOpsAssoc.png" alt="Cyber Ops Associate" height={150} width={150} />


         
          <Image src="/Badges/DEVASC.png" alt="DEV ASC" height={150} width={150} />


                   
          <Image src="/Badges/CyberEssentials.png" alt="CyberSecurity Essentials" height={150} width={150} />

         
          <Image src="/Badges/Networking-Basics.png" alt="Networking Basics" height={150} width={150} />

         
          <Image src="/Badges/ISC2.png" alt="ISC2" height={150} width={150} />

         
          <Image src="/Badges/ITCS.png" alt="ITCS" height={150} width={150} />
          
         
          <Image src="/Badges/ITE.png" alt="ITE" height={150} width={150} />


                   
          <Image src="/Badges/CHB.png" alt="Computer Hardware Basics" height={150} width={150} />

         
          <Image src="/Badges/OSB.png" alt="Operting System Basics" height={150} width={150} />
          
        </div>








      
    </div>

      );
      };
      
      export default Badges;
