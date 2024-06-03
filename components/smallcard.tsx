import Image from 'next/image';
import { ReactNode } from 'react';


const SmallCard = ({ title, ingress, imageurl, alt, tag }: { title?: string, ingress?: string, imageurl?: string, alt?: string, tag?: string }) => {

  //TO DO: Make check if 'obj' exists, if not use 'desc' from meta

  return (
     <div className="rounded overflow-hidden shadow-lg type-smallcard smallcard bg-white">
        <Image
            src={imageurl}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover aspect-[9/7]" 
          />

 
      <div className="px-6 py-4">
        # { title }
        { ingress }
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span> 
      </div>
    </div>
  );
};

export default SmallCard;
  
  
 