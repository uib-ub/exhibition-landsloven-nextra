import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';

// image should have width / height (but we dont know that, so we need to set fill or height 0 (?)



interface CardProps {
  title: string;
  ingress?:string;
  image?: string;
  alt?: string;
}

 
// TO DO: Deafault image or 'check if it exists)




const Card = (props) => {
  const { path='', title, ingress = '', alt='',  image = '', shadow ='shadow-lg' } = props;

  // TO DO: Change Read more text to 'english or norwegian'
  const { locale } = useRouter()
  const aria = locale === 'no' ? 'Les mer om ' + title :  'Read more about ' + title;
  const lenkeText = locale === 'no' ? 'Les mer' :  'Read more';
  
  return (
      <article key={path} className={`rounded type-card overflow-hidden mb-1 sm:my-0 bg-white ${shadow} hover:shadow dark:pb-0 dark:bg-ll-blue-950`}>
         <Link href={path} > 
       
            <Image
              src={image}
              alt={alt ? alt : title}
              width={0}
              height={0}
              sizes="50vw"
              className="w-full object-cover aspect-[9/7] min-h-[120px] max-h-[250px]"
            />
          </Link>
 
          <div className="px-4 pt-2 pb-4 dark:px-4 pt-0 pb-0">
            <Link href={path} > 
              <h2 className="nx-mt-2 font-serif text-[1.3em] font-medium leading-tight text-ll-blue-700 dark:dark:text-sky-300 hover:underline">{ title }</h2>   
            </Link>
            <p className="text-xl dark:text-whiten leading-tight">{ ingress }</p> 
            <p className=" text-right">
              <Link className="pt-1 xunderline text-sky-800 dark:text-sky-300 font-small text-base" aria-label={aria} href={path} >
                {lenkeText} 
                <svg fill="none" viewBox="0 0 30 30" stroke="currentColor" 
                  className="nx-inline nx-h-5 nx-shrink-0 rtl:nx-rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
  
            </Link>    
            </p>    
        </div>
      </article>
    );
  };
  
  export default Card;
    
    
   
  