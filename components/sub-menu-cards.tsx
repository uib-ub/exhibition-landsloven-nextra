import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Card from './card';

type MenuItems = {
  [key: string]: {
    title: string;
    href: string;
    ingress?: string;
    image?: string;
    class?: string;
  };
};

const SubMenuCards = ({ items, columns, gap }: { items: MenuItems, columns?: string, gap?: string }) => {

  if (!items) {
    return null;
  }

  const getIngressValue = (value, locale) => {
    if (typeof value.ingress === 'string') {
      return value.ingress;
    } else if (value.ingress && value.ingress[locale] !== undefined) {
      return value.ingress[locale];
    } else {
      return '';
    }
  };

  // Get the current locale so we can display the correct language
  const { locale } = useRouter();

  const subPages = Object.entries(items).map(([key, value], i) => {
    const title = value.title[locale];
    const path = value.href;
    const ingress = getIngressValue(value, locale);
    const image = value.image ? value.image : '/images/dummy_lands_b.jpg';
    
    // const ingress = value.ingress;

    // Can use "generic" Card component here
    return (
      <Card
        key={key}
        image={image}
        alt={title}
        title={title}
        ingress={ingress}
        path={path}
      />
    );
  });

  // Mapping columns to Tailwind CSS  classes
  const columnsClass = {
    1: 'dm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'dm:grid-cols-4 sm:grid-cols-3',
    5: 'dm:grid-cols-5 sm:grid-cols-3',
    6: 'dm:grid-cols-6 sm:grid-cols-3',
    // add more mappings if needed
  };

  const gapClass = {
    5: 'gap-5',
    10: 'gap-10',
    15: 'gap-15',
    20: 'gap-20',
    30: 'gap-30',
    40: 'gap-40',
  };


  // Fallback to 2 column if no columns prop is provided
  const gridClass = columns ? columnsClass[columns] : 'dm:grid-cols-2';
  const gapsClass = gap ? gapClass[gap] : 'gap-2';


  return (
    <section className="w-full py-5">
      <div className={`grid ${gridClass} grid-cols-1 ${gapsClass}`}>
        {subPages}
      </div>
    </section>
  );
};

export default SubMenuCards;
