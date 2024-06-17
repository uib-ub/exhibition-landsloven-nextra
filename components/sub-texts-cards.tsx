import { useRouter } from 'next/router';
import Card from './card';

type MenuItems = {
  [key: string]: {
    title: string;
    href: string;
    description?: string;
    image?: string;
    class?: string;
  };
};


const SubTextsCards = ({ items, meta, columns = '2', gap = '10', shadow }: { items: MenuItems, meta: any, columns?: string, gap?: string, shadow?: string }) => {
  if (!items) {
    return null;
  }
  delete items.index;
  delete items['X-designalternativer'];

  // Get the current locale so we can display the correct language
  const { locale, asPath } = useRouter();

  const subPages = Object.keys(meta).filter(k => !['---', 'introduksjon'].includes(k)).map((key) => {
    const value = items[key][locale];
    if (!value) return null;

    // Skip the introduction page we are already on
    if (!asPath.includes('index') && (value.href.endsWith('/introduksjon') || value.href.endsWith('/750-ar'))) return null;

    const title = value.title;
    const path = value.href;
    const ingress = value.description; // Got renamed to description
    const image = value.image ? value.image : '/images/dummy_lands_b.jpg';

    // Can use "generic" Card component here
    return (
      <Card
        key={key}
        image={image}
        alt={title}
        title={title}
        ingress={ingress}
        path={path}
        shadow={shadow}
      />
    );
  });


  // Mapping columns to Tailwind CSS classes
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

export default SubTextsCards;
