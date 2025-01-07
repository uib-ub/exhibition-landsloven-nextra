import { useRouter } from 'next/router';
import Card from './card';

type MenuItems = {
  [key: string]: {
    [key: string]: {
      title: string;
      href: string;
      description?: string;
      image?: string;
      class?: string;
    };
  };
};

const SubTextsCards = ({ items, meta, shadow }: { items: MenuItems, meta: any, shadow?: string }) => {
  const router = useRouter();
  const { locale } = router;

  if (!items || !meta) {
    return null;
  }

  if (!Object.keys(meta).length) {
    return null;
  }

  // Create a new filtered object instead of modifying the original
  const filteredItems = Object.fromEntries(
    Object.entries(items).filter(([key]) => ![
      'index',
      'introduksjon',
      'X-designalternativer'
    ].includes(key))
  );

  const subPages = Object.keys(meta)
    .filter(k => !['---', 'introduksjon', '750-ar'].includes(k))
    .map((key) => {
      if (!filteredItems[key]) return null;

      const value = filteredItems[key].introduksjon?.[locale] ||
        filteredItems[key].epilog?.[locale] ||
        filteredItems[key]?.[locale];

      if (!value) return null;

      const title = value.title;
      const path = value.href;
      const alt = value.alt;
      const ingress = value.description; // Got renamed to description
      const image = value.image ? value.image : '/images/dummy_lands_b.jpg';

      return (
        <Card
          key={`${key}-${locale}`}
          image={image}
          alt={alt ?? ''}
          title={title}
          ingress={ingress}
          path={path}
          shadow={shadow}
        />
      );
    })
    .filter(Boolean);

  if (!subPages.length) return null;

  return (
    <section className="w-full py-5">
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8`}>
        {subPages}
      </div>
    </section>
  );
};

export default SubTextsCards;
