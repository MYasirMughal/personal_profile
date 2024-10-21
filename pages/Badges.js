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
         <a href="https://www.credly.com/badges/ebf52b02-4e26-45ee-a1b7-c649de9102e4">
 <Image src="/Badges/CCNA-SRWE.png" alt="CCNA SRWE" height={140} width={140} /></a>
</div>
<div className="mr-[5px]">
   <a href="https://www.credly.com/badges/07d20ca4-3975-43c4-ae88-0fee50b5e3f8">     
<Image src="/Badges/CCNA-ITN.png" alt="CCNA ITN" height={140} width={140} /></a>
          </div>
<div className="mr-[5px]">
       <a href="https://www.credly.com/badges/d37c6a51-500c-4517-8c8b-81bf75d0b44f">
 <Image src="/Badges/Network_Security.png" alt="Network Security" height={140} width={140} /></a>
</div>

<div className="mr-[5px]">
<a href="https://www.credly.com/badges/c6acb438-6738-4e8d-80f2-e890d94f400a">
            <Image src="/Badges/Networking-Essentials.png" alt="Networking Essentials" height={140} width={140} /></a>
</div>

        <div className="mr-[5px]">           
      <a href="https://www.credly.com/badges/71ca5de6-b815-4afa-9bd7-c8037d0ba8e0">   
 <Image src="/Badges/CyberOpsAssoc.png" alt="Cyber Ops Associate" height={140} width={140} /></a>

        </div>
       <div className="mr-[5px]">  
         <a href="https://www.credly.com/badges/239e95c5-0e11-44b4-9973-b50ae0f7eeec">
 <Image src="/Badges/DEVASC.png" alt="DevNet Associate" height={140} width={140} /></a>

       </div>
            <div className="mr-[5px]">       
        <a href="https://www.credly.com/badges/f366963f-0b29-4acf-bfa2-38731bac87e2">
<Image src="/Badges/CyberEssentials.png" alt="CyberSecurity Essentials" height={140} width={140} /></a>
            </div>
     <div className="mr-[5px]">    
          <a href="https://www.credly.com/badges/627a72ce-39c3-4982-84b6-dc7ee708b2c1">
<Image src="/Badges/Networking-Basics.png" alt="Networking Basics" height={140} width={140} /></a>
     </div>
      <div className="mr-[5px]">   
          <a href="https://www.credly.com/badges/d8e14cce-f7ca-4b73-af1e-20e997cf8744">
<Image src="/Badges/ISC2.png" alt="ISC2" height={140} width={140} /></a>

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
