import Image from 'next/image';
import Link from 'next/link'; 
import { useRouter } from 'next/router';
import Card from 'components/card';


type MenuItems = {
  [key: string]: {
    title: string;
    href: string;
    ingress?: string;
    image?: string;
    class?: string;
  };
};


const SubBox = ({ items, columns, gap }: { items: MenuItems, columns: string, gap: string }) => {
  
  
  if (!items) {
    return null;
  }
  // Get the current locale so we can display the correct language
  const { locale } = useRouter();
  
  const subPages = Object.entries(items).map(([key, value], i) => {
    const title = value.title[locale]
    const path = value.href
    const image =  value.image ? value.image : '/images/dummy_lands_b.jpg';
 

    //To Do: Locale is not working, needs to be defined in config
    const ingress = value.ingress


    // Can use "generic" Card component here
     
    return (
       
        <Card 
          path={path}
          title={title}
          ingress={ingress}
          image={image}
          alt={title}
          
        />
        
    )
  })

  return (
    <section className='w-full py-5'> 
      <div className={`flex grid grid-cols-1 gap-{String(gap)} md:grid-cols-${String(columns)}`}>
        {subPages.map((subpage: any) => (
          subpage
        ))}
      </div>
    </section>
  );
}

export default SubBox;
