import Image from 'next/image'



// image should have width / height (but we dont know that, so we need to set fill or height 0 (?)

const HCard = ({ title, ingress, image, alt }: { title?:string, image?: string, ingress?:string, alt?: string  }) => {
return (
  <div className="max-w-sm w-full lg:max-w-full lg:flex my-4 max-w rounded shadow-lg xoverflow-hidden bg-white dark:bg-yellow-800" >
      <Image
            src={image}  
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-1/3 lg:max-w-full object-cover transition duration-300 ease-in-out hover:scale-105" 
      />
      <div className="w-2/3 lg:w-full lg:max-w-full bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4  justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 dark:text-white flex items-center">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
             &nbsp; Fakta / Fact
          </p>
          <div >
            &nbsp;
            {title}
            {ingress}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCard;
  
  
 

