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
    const title = value.title[locale];
    const path = value.href;
    const image = value.image ? value.image : '/images/dummy_lands_b.jpg';
    const ingress = value.ingress;

    // Can use "generic" Card component here
    return (
      <Card
        key={key}
        path={path}
        title={title}
        ingress={ingress}
        image={image}
        alt={title}
      />
    );
  });

  // Utility function to generate the class names
  const generateGridClasses = (columns: string, gap: string) => {
    const colClass = `md:grid-cols-${columns}`;
    const gapClass = `gap-${gap}`;
    return `grid grid-cols-1 ${colClass} ${gapClass}`;
  };

  return (
    <section className="w-full py-5">
      <div className={generateGridClasses(columns, gap)}>
        {subPages}
      </div>
    </section>
  );
};

export default SubBox;
